import { Router } from 'express';
import { z } from 'zod';
import { appendAuditEvent } from '../services/hashChain';

const createBookingSchema = z.object({
  userId: z.string(),
  lotId: z.string(),
  startAt: z.string(),
  endAt: z.string(),
  paymentMode: z.enum(['free', 'paid'])
});

export const bookingRouter = Router();

bookingRouter.post('/', (req, res) => {
  const parsed = createBookingSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const bookingId = `bk_${Date.now()}`;
  const audit = appendAuditEvent({ bookingId, action: 'booking_created', actorId: parsed.data.userId, payload: parsed.data });

  return res.status(201).json({ bookingId, status: 'reserved', auditHash: audit.hash });
});
