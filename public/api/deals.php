<?php
/**
 * GET /api/deals?status=active|upcoming|ended|all&tool=<slug>
 * Filters the build-generated deals.json by the server's current time, so
 * expired deals drop out even between daily rebuilds.
 */
declare(strict_types=1);

require __DIR__ . '/_ratelimit.php';

pc_rate_limit(60, 60);

$data = json_decode((string) @file_get_contents(__DIR__ . '/deals.json'), true);
if (!is_array($data) || !is_array($data['deals'] ?? null)) {
    http_response_code(503);
    pc_json_headers();
    echo json_encode(['error' => 'Deals data unavailable']);
    exit;
}

$endingSoon = (int) (($data['rules']['endingSoonMs'] ?? 259200000) / 1000);
$newsFresh = (int) (($data['rules']['newsFreshMs'] ?? 3888000000) / 1000);
$now = time();

$statusOf = static function (array $deal) use ($now, $endingSoon, $newsFresh): string {
    $starts = strtotime((string) $deal['startsAt']);
    $ends = $deal['endsAt'] !== null ? strtotime((string) $deal['endsAt']) : null;
    if ($starts > $now) {
        return 'upcoming';
    }
    if ($ends !== null) {
        if ($ends <= $now) {
            return 'ended';
        }
        return $ends - $now <= $endingSoon ? 'ending-soon' : 'active';
    }
    if (!empty($deal['ongoing'])) {
        return 'active';
    }
    return $now - $starts <= $newsFresh ? 'active' : 'past';
};

$groups = [
    'active' => ['active', 'ending-soon'],
    'upcoming' => ['upcoming'],
    'ended' => ['ended', 'past'],
    'all' => ['active', 'ending-soon', 'upcoming', 'ended', 'past'],
];
$filter = is_string($_GET['status'] ?? null) && isset($groups[$_GET['status']]) ? $_GET['status'] : 'active';
$tool = is_string($_GET['tool'] ?? null) ? strtolower(trim($_GET['tool'])) : null;

$deals = [];
foreach ($data['deals'] as $deal) {
    $deal['status'] = $statusOf($deal);
    if (!in_array($deal['status'], $groups[$filter], true)) {
        continue;
    }
    if ($tool !== null && $tool !== '' && $deal['tool'] !== $tool) {
        continue;
    }
    $deals[] = $deal;
}

pc_json_headers();
header('Cache-Control: public, s-maxage=300, stale-while-revalidate=60');

echo json_encode([
    'generatedAt' => $data['generatedAt'] ?? null,
    'now' => pc_iso($now),
    'status' => $filter,
    'count' => count($deals),
    'deals' => $deals,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
