# SmartPark AI: Free Staging Deployment Guide

This guide shows how to run a **staging environment at zero cost** using free tiers.

## Target Free Stack

- **Mobile previews**: Expo EAS Preview builds (free tier limits apply)
- **Backend API (staging)**: Vercel Hobby (Node serverless)
- **Realtime/Auth/Storage (staging)**: Firebase Spark plan (separate staging project)
- **Admin Web (staging)**: Netlify Free (or Vercel Hobby)
- **Database**: MongoDB Atlas M0 (separate staging cluster)

## 1) Create isolated staging resources

Use separate projects to avoid production data mixing:

- `smartpark-staging` Firebase project
- `smartpark-staging` MongoDB Atlas cluster/database
- `smartpark-staging-api` Vercel project
- `smartpark-staging-admin` Netlify/Vercel project

## 2) Backend staging deploy (Vercel Hobby)

1. Connect repo to Vercel and select `apps/backend` as root directory.
2. Set environment variables from `apps/backend/.env.example` with staging values.
3. Set build command: `npm run build`.
4. Set output: serverless functions (Vercel auto-detects Node).
5. Deploy branch `staging`.

### Required env vars (staging)

- `MONGODB_URI` -> staging Atlas URI
- `FIREBASE_PROJECT_ID` -> staging Firebase project
- `JWT_SECRET` -> staging secret
- payment/twilio keys -> sandbox/test credentials only

## 3) Admin web staging deploy (Netlify/Vercel Free)

- Root directory: `apps/admin-web`
- Build command: `npm run build`
- Publish directory: `dist`
- Set `VITE_API_URL` to the staging backend URL

## 4) Mobile staging setup (Expo)

1. Create `apps/mobile/.env.staging` from `.env.example`.
2. Set `EXPO_PUBLIC_API_URL` to staging backend URL.
3. Set staging Firebase public config values.
4. Build preview:

```bash
cd apps/mobile
npx eas build --profile preview --platform android
```

## 5) Branch strategy for free staging

- `main` -> production
- `staging` -> automatic staging deploy
- `feature/*` -> PR previews (where available)

## 6) Validate staging health

- API health: `GET /health`
- Booking create: `POST /api/bookings`
- Reliability decision: `POST /api/reliability/decision`
- Admin web loads and points to staging API
- Mobile app points to staging env

## 7) Keep within free-tier limits

- Use short log retention
- Throttle background jobs
- Cache read-heavy endpoints
- Batch Firestore writes
- Disable heavy analytics in staging

## 8) Rollback plan (free)

- Re-deploy previous Vercel deployment from dashboard
- Keep previous `.env` snapshots in secure secret manager
- Revert `staging` branch commit and redeploy
