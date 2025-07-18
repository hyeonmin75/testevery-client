# Deployment Configuration

## Project Type
This is a **Next.js application** with static export configuration.

## Build Process
The project should be built using:
```bash
npx next build
```

## Output
- Build output is in the `out/` directory
- This is a static site that can be deployed to any static hosting service
- The project uses `output: 'export'` in next.config.mjs for static site generation

## Deployment Commands
- **Build**: `npx next build`
- **Start**: `npm start` (for production server) or deploy `out/` directory as static files

## Key Files
- `next.config.mjs` - Next.js configuration with static export
- `next.config.cjs` - Alternative Next.js configuration
- `out/` - Static build output directory
- `app/` - Next.js App Router source code

## Notes
- The project is configured for static deployment (no server required)
- All routes are pre-rendered at build time
- SEO optimized with proper meta tags and sitemap