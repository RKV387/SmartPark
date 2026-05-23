# SmartPark AI Monorepo

SmartPark AI is a zero-IoT, smartphone-sensor-powered parking ecosystem. This repository provides a production-oriented monorepo scaffold for:

- **Mobile app (Expo React Native)** for Driver/Host/Guard/Admin-lite operations.
- **Backend API (Express + Firebase Functions style adapters)** for bookings, pricing, KYC, RTO lookup, towing, audit logs.
- **Admin web panel (React + Vite)** for governance workflows.
- **Shared packages** for types, security primitives, sensor confidence scoring, and offline sync contracts.

## Vision

> No external hardware. The smartphone itself becomes infrastructure.

This implementation emphasizes:

- Offline-first behavior with queue + replay.
- Sensor-fusion-driven check-in/check-out confidence.
- Guard-less flow using rotating signed QR tokens.
- Fraud-resistant append-only hash-chain event logs.
- Free-tier deployability and deterministic local development.

## Monorepo Structure (Yarn Workspaces)

- `apps/mobile` – Expo app (Driver/Host/Guard/Admin-lite)
- `apps/admin-web` – React/Vite dashboard
- `apps/backend` – Express API + function handlers
- `packages/shared` – shared contracts and crypto helpers
- `docs` – architecture, schema diagrams, OWASP controls, runbooks

## Quick Start

```bash
yarn install
yarn dev
```

## Workspaces Scripts

- `yarn dev` – run mobile/web/backend in parallel
- `yarn lint` – lint all workspaces
- `yarn test` – run all unit tests
- `yarn typecheck` – TypeScript checks

## Free-tier Constraints and Practical Limits

Documented in `docs/free-tier-budget.md`.

## Reliability in No-Network / No-GPS Cases

Implemented strategy in `docs/offline-reliability.md` with:

1. local durable queue
2. CRDT-style merge intents
3. sensor fallback stack (GPS -> dead-reckoning -> barometer/magnetometer hints)
4. confidence-based deferred settlement

## Security

- TLS-only network contracts
- Signed tokens for QR/checkpoint events
- hash-chain booking audit log
- OWASP Mobile Top 10 mitigation matrix at `docs/owasp-mobile-top10.md`

## Deployment

- Expo EAS scripts
- Vercel backend adapter
- Firebase function trigger examples

See `docs/deployment.md` and `.env.example` files in each app.

## Staging Deployment (Free)

A full free-tier staging playbook is available in `docs/staging-deployment-free.md`.
