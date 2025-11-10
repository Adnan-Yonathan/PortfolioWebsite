# Studio Elemental Web Design

This project is a [Next.js](https://nextjs.org/) + Tailwind + TypeScript landing page that showcases the Studio Elemental web design offering.

## Development

- `npm run dev` – Start the Next.js dev server (`http://localhost:3000`)
- `npm run build` – Compile the production build
- `npm run start` – Run the production build locally
- `npm run lint` – Execute the Next.js ESLint suite

## Structure

- `app/` – Next.js app directory (layout, pages, globals)
- `components/ui/` – shadcn-style UI primitives (`button`, animated hero, etc.)
- `lib/utils.ts` – Utility helpers (e.g., `cn` from `clsx`)

The project uses the shadcn CLI layout, so `/components/ui` is the canonical place for shared primitives that get exported for the rest of the app. Keeping this folder ensures aliases like `@/components/ui/button` resolve consistently.
