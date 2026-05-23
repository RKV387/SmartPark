export type Role = 'driver' | 'host' | 'guard' | 'admin';

export interface BookingTokenPayload {
  bookingId: string;
  driverId: string;
  startAt: string;
  exp: string;
  nonce: string;
}
