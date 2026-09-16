<?php
/**
 * GET /api/status — live Claude peak-hours status.
 * Same JSON shape as the original Next.js route. The peak window comes from
 * claude.json, generated at build time from src/data/claude.ts.
 */
declare(strict_types=1);

require __DIR__ . '/_ratelimit.php';

pc_rate_limit(60, 60);

$config = json_decode((string) @file_get_contents(__DIR__ . '/claude.json'), true);
$peak = is_array($config['peakHours'] ?? null) ? $config['peakHours'] : ['startUtc' => 13, 'endUtc' => 19];
$start = (int) $peak['startUtc'];
$end = (int) $peak['endUtc'];

$now = time();
$day = (int) gmdate('w', $now);
$hour = (int) gmdate('G', $now);
$year = (int) gmdate('Y', $now);
$month = (int) gmdate('n', $now);
$date = (int) gmdate('j', $now);
$at = static fn (int $dayOffset, int $h): int => gmmktime($h, 0, 0, $month, $date + $dayOffset, $year);

$isWeekend = $day === 0 || $day === 6;
$isPeak = !$isWeekend && $hour >= $start && $hour < $end;

if ($isWeekend) {
    $next = $at($day === 6 ? 2 : 1, $start);
} elseif ($isPeak) {
    $next = $at(0, $end);
} elseif ($hour < $start) {
    $next = $at(0, $start);
} else {
    $next = $at($day === 5 ? 3 : 1, $start);
}

$utcLabel = static function (int $h): string {
    $suffix = $h >= 12 ? 'pm' : 'am';
    $h12 = $h % 12 === 0 ? 12 : $h % 12;
    return $h12 . $suffix;
};
$pacific = new DateTimeZone('America/Los_Angeles');
$ptLabel = static function (int $h) use ($at, $pacific): string {
    return (new DateTimeImmutable('@' . $at(0, $h)))->setTimezone($pacific)->format('g:i A');
};
$ptAbbr = (new DateTimeImmutable('@' . $now))->setTimezone($pacific)->format('T');

$secondsUntilChange = $next - $now;
$micro = microtime(true);

pc_json_headers();
header(sprintf('Cache-Control: public, s-maxage=%d, stale-while-revalidate=10', max(0, min($secondsUntilChange, 60))));

echo json_encode([
    'status' => $isPeak ? 'peak' : 'off_peak',
    'isPeak' => $isPeak,
    'isOffPeak' => !$isPeak,
    'isWeekend' => $isWeekend,
    'sessionLimitSpeed' => $isPeak ? 'faster_than_normal' : 'normal',
    'emoji' => $isPeak ? '🔴' : '🟢',
    'label' => $isPeak ? 'Peak Hours — Limits Drain Faster' : 'Off-Peak — Normal Speed',
    'peakHours' => sprintf('Weekdays %s–%s UTC / %s–%s %s', $utcLabel($start), $utcLabel($end), $ptLabel($start), $ptLabel($end), $ptAbbr),
    'nextChange' => pc_iso($next),
    'minutesUntilChange' => intdiv($secondsUntilChange, 60),
    'timestamp' => gmdate('Y-m-d\TH:i:s', (int) $micro) . sprintf('.%03dZ', (int) (($micro - floor($micro)) * 1000)),
    'utcHour' => $hour,
    'utcDay' => $day,
    'note' => 'No known end date for peak hours adjustment. Weekly limits unchanged.',
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
