<?php
/**
 * Shared helpers for PromoClock's PHP endpoints (cPanel).
 * File-based fixed-window rate limit keyed by client IP; fails open if no
 * writable storage is available.
 */
declare(strict_types=1);

if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === basename(__FILE__)) {
    http_response_code(404);
    exit;
}

function pc_client_ip(): string
{
    foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $key) {
        if (!empty($_SERVER[$key])) {
            return trim(explode(',', (string) $_SERVER[$key])[0]);
        }
    }
    return 'unknown';
}

function pc_storage_dir(): ?string
{
    $candidates = [];
    $docRoot = $_SERVER['DOCUMENT_ROOT'] ?? '';
    if ($docRoot !== '') {
        // Outside the web root on cPanel: /home/<user>/.promoclock-ratelimit
        $candidates[] = dirname(rtrim($docRoot, '/')) . '/.promoclock-ratelimit';
    }
    $candidates[] = sys_get_temp_dir() . '/promoclock-ratelimit';

    foreach ($candidates as $dir) {
        if ((is_dir($dir) || @mkdir($dir, 0700, true)) && is_writable($dir)) {
            return $dir;
        }
    }
    return null;
}

function pc_json_headers(): void
{
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('X-Content-Type-Options: nosniff');
}

function pc_rate_limit(int $limit = 60, int $windowSeconds = 60): void
{
    $dir = pc_storage_dir();
    if ($dir === null) {
        return;
    }

    $file = $dir . '/' . hash('sha256', pc_client_ip()) . '.json';
    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        return;
    }

    flock($handle, LOCK_EX);
    $now = time();
    $state = json_decode((string) stream_get_contents($handle), true);
    if (!is_array($state) || $now >= (int) ($state['reset'] ?? 0)) {
        $state = ['count' => 0, 'reset' => $now + $windowSeconds];
    }
    $state['count'] = (int) $state['count'] + 1;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, (string) json_encode($state));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    // Occasionally sweep expired windows.
    if (random_int(1, 200) === 1) {
        foreach (glob($dir . '/*.json') ?: [] as $old) {
            if (@filemtime($old) < $now - 600) {
                @unlink($old);
            }
        }
    }

    if ($state['count'] > $limit) {
        $retryAfter = max(1, (int) $state['reset'] - $now);
        http_response_code(429);
        pc_json_headers();
        header('Retry-After: ' . $retryAfter);
        header('Cache-Control: no-store');
        echo json_encode(['error' => 'Too many requests', 'retryAfter' => $retryAfter]);
        exit;
    }
}

function pc_iso(int $seconds): string
{
    return gmdate('Y-m-d\TH:i:s.000\Z', $seconds);
}
