# Modern Demo Site (SSI Hostname)

A minimal, responsive static site ready to be served via Nginx. It demonstrates Server Side Includes (SSI) by rendering the instance hostname directly in the page, with a JavaScript fallback if SSI is disabled.

## Structure

- `index.html` — main page, includes SSI hostname snippets
- `styles/main.css` — modern, responsive styles with light/dark support
- `scripts/main.js` — hostname fallback, theme toggle, small helpers
- `favicon.svg` — simple gradient favicon

## Nginx Configuration

Enable SSI for the location that serves this site. Example:

```
location / {
    root   /var/www/html; # adjust to your path
    index  index.html;
    ssi    on;            # enables <!--# echo var="hostname" -->
}
```

The page uses:

```html
<strong id="host-name"><!--# echo var="hostname" --></strong>
```

If SSI does not run, `scripts/main.js` falls back to `window.location.hostname` and fills the element on DOMContentLoaded.

## Browser Support

Targets modern evergreen browsers. No external dependencies or network calls.

