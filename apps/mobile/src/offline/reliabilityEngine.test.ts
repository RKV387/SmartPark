import { computeCheckinConfidence, decideMode } from './reliabilityEngine';

test('computes confidence in range', () => {
  const score = computeCheckinConfidence({ gpsConfidence: 1, accelConfidence: 1, gyroConfidence: 1, magnetConfidence: 1, barometerConfidence: 1 });
  expect(score).toBe(1);
});

test('decides offline autonomous when no network and no gps', () => {
  expect(decideMode(false, false)).toBe('offline-autonomous');
});
