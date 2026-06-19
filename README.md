# react-ecom-shop

A game-focused ecommerce storefront built with React. Browse curated game catalogs by genre, add items to cart, and manage your cart — all with persistent state via React Context.

**Live demo**: https://react-ecom-shop-rld8m1vok-bryanzou78s-projects.vercel.app/

**Tech stack**: React, Vite, React Router, Context API, RAWG API

## Getting Started

```bash
npm install
npm run dev
```

## Testing

**Unit/integration tests (Jest/RTL):**
```bash
npm test
```
Covers `ProductCard`, `CartPage`, and `CartContext` — 11 tests total.

**End-to-end tests (Cypress):**
```bash
npx cypress run
ELECTRON_DISABLE_GPU=1 npx cypress open  # GUI (WSL only)
```
Covers homepage, category page, and cart flows including network interception via `cy.intercept()` — 14 tests across 4 spec files.