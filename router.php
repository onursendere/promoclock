<?php
/**
 * Router for PHP's built-in server, so the endpoint can run locally with the
 * same public URLs as production:
 *
 *   php -S 127.0.0.1:8000 -t api router.php
 */
$path = (string) parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

if (preg_match('#^/api/status/?$#', $path)) {
    require __DIR__ . '/api/status.php';
    return true;
}

// The rate limiter and the peak-window config are internal and never served.
http_response_code(preg_match('#^/api/(_|claude\.json$)#', $path) ? 403 : 404);
return true;
