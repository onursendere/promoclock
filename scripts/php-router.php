<?php
/**
 * Router for `php -S` (no mod_rewrite): mirrors the API rules from the
 * generated .htaccess so tests hit the same public URLs as production.
 */
$path = (string) parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

if (preg_match('#^/api/(_|claude\.json$)#', $path)) {
    http_response_code(403);
    return true;
}

if (preg_match('#^/api/(deals(\.php|\.json)?|tools\.json)/?$#', $path)) {
    http_response_code(410);
    return true;
}

if (preg_match('#^/api/status/?$#', $path)) {
    require $_SERVER['DOCUMENT_ROOT'] . '/api/status.php';
    return true;
}

return false;
