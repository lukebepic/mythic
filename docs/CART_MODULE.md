# Cart Experience & Upsells – Integration

## Includes

- **Cart Drawer:** `cart-drawer.liquid`
- **Cart Modal:** `cart-modal.liquid`
- **Cart Main:** `cart-main.liquid`
- **Cart Gift Options:** `cart-gift-options.liquid`
- **Cart Upsell:** `cart-upsell.liquid`
- **Cart Progress Bar:** `cart-progress-bar.liquid`
- **Cart Suggestions:** `cart-suggestions.liquid`
- **AJAX Logic:** `assets/cart-ajax.js`

## How To Integrate

- Add the `cart-drawer.liquid` snippet to your layout or header for a slide-out experience.
- Use `cart-modal.liquid` for popup confirmation (optionally after AJAX add-to-cart).
- Render `cart-main.liquid` in your main cart page, and as the core content for both drawer and modal.
- Include `cart-ajax.js` in your main JavaScript bundle or via `<script src="">`.

## Features

- AJAX add, update, and remove for smooth UX
- Progress bar for free shipping
- Optional upsell and recommendations
- Support for gift notes, promo codes, and personalized line properties
- Fully accessible and responsive

---