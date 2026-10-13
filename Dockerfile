# syntax=docker/dockerfile:1
# Static Astro build served by Apache + PHP — the same .htaccess and PHP API as
# the cPanel target. Listens on $PORT (default 80) so the VPS run command stays:
#   docker run -d --name promoclock --restart unless-stopped --network host -e PORT=3001 promoclock:latest
#
# Deploys build with --build-arg PREVIOUS_IMAGE=promoclock:latest so the image also serves the
# replaced release's hashed /_astro assets: pages still cached at Cloudflare until the purge, or open
# in a browser tab, keep loading their scripts and styles. Only one release is kept. The default
# (the plain runtime base) carries nothing.
ARG PREVIOUS_IMAGE=php:8.4-apache-bookworm

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build \
 && find dist/_astro -type f ! -name .htaccess -printf '%P\n' | sort > release-assets.txt

FROM ${PREVIOUS_IMAGE} AS previous
# The previous image's own assets: those its manifest lists, or all of /_astro for an image built
# before manifests existed (it held nothing carried over).
RUN mkdir -p /carry \
 && if [ -d /var/www/html/_astro ]; then \
      cd /var/www/html/_astro \
      && { cat /var/www/release-assets.txt 2>/dev/null || find . -type f ! -name .htaccess -printf '%P\n'; } \
      | while read -r f; do if [ -f "$f" ]; then cp -p --parents "$f" /carry/; fi; done; \
    fi

FROM php:8.4-apache-bookworm AS runtime
RUN a2enmod rewrite headers deflate \
 && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" \
 && printf 'expose_php = Off\n' > "$PHP_INI_DIR/conf.d/promoclock.ini" \
 && sed -ri 's/^Listen 80$/Listen ${PORT}/' /etc/apache2/ports.conf \
 && mkdir -p /var/www/.promoclock-ratelimit \
 && chown www-data:www-data /var/www/.promoclock-ratelimit
COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf
COPY --from=previous /carry/ /var/www/html/_astro/
COPY --from=build /app/dist/ /var/www/html/
COPY --from=build /app/release-assets.txt /var/www/release-assets.txt
ENV PORT=80
