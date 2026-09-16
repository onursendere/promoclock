# syntax=docker/dockerfile:1
# Static Astro build served by Apache + PHP — the same .htaccess and PHP API as
# the cPanel target. Listens on $PORT (default 80) so the VPS run command stays:
#   docker run -d --name promoclock --restart unless-stopped --network host -e PORT=3001 promoclock:latest

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM php:8.4-apache-bookworm AS runtime
RUN a2enmod rewrite headers deflate \
 && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" \
 && printf 'expose_php = Off\n' > "$PHP_INI_DIR/conf.d/promoclock.ini" \
 && sed -ri 's/^Listen 80$/Listen ${PORT}/' /etc/apache2/ports.conf \
 && mkdir -p /var/www/.promoclock-ratelimit \
 && chown www-data:www-data /var/www/.promoclock-ratelimit
COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf
COPY --from=build /app/dist/ /var/www/html/
ENV PORT=80
