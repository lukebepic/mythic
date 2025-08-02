# Localization & Predictive Search Modules

## Localization & Multi-Currency

- `localization-language-selector.liquid` — Language selector (header/footer/modal ready, Shopify Markets compatible)
- `localization-country-selector.liquid` — Country/currency selector using Shopify Markets data
- `localization-auto-redirect.liquid` — (Optional) Geo IP-based auto-redirect logic (placeholder, typically handled by Shopify apps)
- `localization-dynamic-translation.liquid` — Helper for dynamic translation keys (multi-language support)
- `currency-switcher.liquid` — Standalone currency selector (if needed)

### Integration:
- Place language and country selectors in your header, footer, or modals.
- Use translation helper for all visible text to support dynamic language switching.
- For currency, prefer Shopify Markets logic; use currency switcher only if needed.

---

## Predictive Search

- `predictive-search.liquid` — Autocomplete dropdown for products, pages, articles.
  - Accessible, keyboard/mouse/mobile friendly.
  - Uses `/search/suggest.json` endpoint for instant results.

### Integration:
- Place predictive search form in your header, navigation, or anywhere a search bar is needed.
- Fully compatible with Shopify's built-in search and resource types.

---

_Next steps: Let me know if you want advanced features (e.g. mega navigation, advanced filtering, app integrations) or a full theme summary and handoff!_