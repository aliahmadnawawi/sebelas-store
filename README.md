# Sebelas Store

Full-stack SaaS platform for multi-store commerce and omnichannel messaging.

## Domains
- Primary: sebelasindonesia.app
- Admin: admin.sebelasindonesia.app
- API: api.sebelasindonesia.app
- Storefront: {storeSlug}.sebelasindonesia.app
- Alternate routing: /s/:storeSlug

## Tech stack
- Backend: NestJS, Prisma, PostgreSQL
- Admin frontend: Next.js, Tailwind, shadcn-style UI
- Storefront: Next.js, Tailwind, mobile bottom navigation
- Realtime: WebSocket inbox (Socket.IO)
- Queue: Redis + BullMQ
- Storage: S3-compatible (DigitalOcean Spaces-ready)

## Quick start
```bash
docker compose up --build
```

Services:
- API: http://localhost:4000/v1
- Admin web: http://localhost:3000
- Store web: http://localhost:3001

## Environment
Copy env examples if you want to override defaults:
- `apps/api/.env.example`
- `apps/admin-web/.env.example`
- `apps/store-web/.env.example`

## Seed admin user
The seed script is wired to Prisma:
- Email: `ADMIN_EMAIL`
- Password: `ADMIN_PASSWORD`

Run once after migrations:
```bash
cd apps/api
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

## API endpoints
- `GET /v1/health`
- `POST /v1/webhooks/telegram/:botId`
- `POST /v1/webhooks/whatsapp/:botId`
- `POST /v1/webhooks/payments/:provider/:storeId`
- `GET /v1/stores`
- `POST /v1/stores`
- `GET /v1/stores/:id`
- `GET /v1/stores/:storeId/products`
- `POST /v1/stores/:storeId/products`
- `GET /v1/bots`
- `POST /v1/bots`
- `GET /v1/payments/providers`
- `POST /v1/payments/providers`
- `GET /v1/inbox/threads`
- `GET /v1/inbox/messages?threadId=...`

## Realtime inbox
Socket.IO namespace: `/ws`
- Connect: `ws://api.sebelasindonesia.app/ws`
- Events: `join`, `message`

## DigitalOcean + Cloudflare setup
1) DigitalOcean
- Create a Postgres database and Redis instance (or use managed services).
- Create a DigitalOcean Space and set `S3_ENDPOINT`, `S3_REGION`, `S3_BUCKET`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`.
- Deploy the three services (api, admin-web, store-web) via App Platform or Docker on Droplets.

2) Cloudflare DNS
- `A` record for `sebelasindonesia.app` -> store-web load balancer or Droplet IP.
- `A` record for `admin.sebelasindonesia.app` -> admin-web.
- `A` record for `api.sebelasindonesia.app` -> api.
- `CNAME` wildcard `*.sebelasindonesia.app` -> `sebelasindonesia.app` (storefront).

3) SSL and routing
- Enable Full SSL in Cloudflare.
- Make sure your proxy forwards `Host` headers so the store-web middleware can rewrite subdomains to `/s/:storeSlug`.

## Notes
- Payment providers are UI-only placeholders with encrypted API keys.
- Webhook endpoints enqueue jobs in BullMQ for processing.

