# HiTHIUM Bangladesh E-Commerce Platform

Official e-commerce platform for HiTHIUM Bangladesh — exclusive distributor of HiTHIUM and HiTHIUM HeroEE energy storage products.

## Tech Stack

- **Backend**: [MedusaJS](https://medusajs.com/) — Headless commerce engine
- **Frontend**: [Next.js 15](https://nextjs.org/) + [HeroUI](https://heroui.com/) — React UI framework with TailwindCSS
- **Database**: PostgreSQL

## Project Structure

```
hithium-np/
├── backend/          # MedusaJS backend server
│   ├── src/
│   │   ├── api/      # Custom API routes
│   │   ├── modules/  # Custom modules
│   │   └── seed/     # Seed data for products
│   └── medusa-config.ts
├── storefront/       # Next.js + HeroUI storefront
│   ├── src/
│   │   ├── app/      # Next.js App Router pages
│   │   ├── components/
│   │   ├── lib/      # Medusa client & utilities
│   │   └── styles/
│   └── next.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL 15+
- npm or pnpm

### Backend Setup

```bash
cd backend
cp .env.template .env
# Update .env with your database credentials
npm install
npx medusa db:migrate
npm run seed
npm run dev
```

### Storefront Setup

```bash
cd storefront
cp .env.template .env.local
npm install
npm run dev
```

The storefront runs at `http://localhost:8000` and the backend at `http://localhost:9000`.

## Products

- HiTHIUM HeroEE 1 — 1kWh Portable Power Station
- HiTHIUM HeroEE 2 — 2kWh Home Backup System
- HiTHIUM HeroEE 8 — 8kWh Energy Storage System
- HiTHIUM HeroEE 16 — 16kWh LiFePO₄ Battery Pack
- HiTHIUM 200W Portable Solar Panel

## License

Proprietary — HiTHIUM Energy Storage Technology BD Ltd.
