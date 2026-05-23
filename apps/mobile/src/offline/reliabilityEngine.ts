export interface SensorSnapshot {
  gpsConfidence: number;
  accelConfidence: number;
  gyroConfidence: number;
  magnetConfidence: number;
  barometerConfidence: number;
}

export function computeCheckinConfidence(s: SensorSnapshot): number {
  const weights = { gpsConfidence: 0.35, accelConfidence: 0.2, gyroConfidence: 0.2, magnetConfidence: 0.15, barometerConfidence: 0.1 } as const;
  const score = s.gpsConfidence * weights.gpsConfidence + s.accelConfidence * weights.accelConfidence + s.gyroConfidence * weights.gyroConfidence + s.magnetConfidence * weights.magnetConfidence + s.barometerConfidence * weights.barometerConfidence;
  return Math.max(0, Math.min(1, score));
}

export function decideMode(networkOnline: boolean, gpsAvailable: boolean): 'normal' | 'offline-autonomous' | 'sensor-only' {
  if (!networkOnline && !gpsAvailable) return 'offline-autonomous';
  if (!gpsAvailable) return 'sensor-only';
  return 'normal';
}
