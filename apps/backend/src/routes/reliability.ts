import { Router } from 'express';

export const reliabilityRouter = Router();

reliabilityRouter.post('/decision', (req, res) => {
  const { networkOnline, gpsAvailable, confidence } = req.body as { networkOnline: boolean; gpsAvailable: boolean; confidence: number };
  const mode = !networkOnline && !gpsAvailable ? 'offline-autonomous' : gpsAvailable ? 'normal' : 'sensor-only';
  const decision = confidence >= 0.9 ? 'auto-checkin' : confidence >= 0.7 ? 'challenge-response' : 'manual-verification';
  res.json({ mode, decision });
});
