import { createHash } from 'crypto';

type AuditEvent = { bookingId: string; action: string; actorId: string; payload: unknown };
const chain: { hash: string; prevHash: string; event: AuditEvent }[] = [];

export function appendAuditEvent(event: AuditEvent) {
  const prevHash = chain.length ? chain[chain.length - 1].hash : 'GENESIS';
  const material = JSON.stringify({ prevHash, event, at: new Date().toISOString() });
  const hash = createHash('sha256').update(material).digest('hex');
  const node = { hash, prevHash, event };
  chain.push(node);
  return node;
}
