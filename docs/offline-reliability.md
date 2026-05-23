# Offline & No-GPS Reliability

1. Persist booking/session intents in local durable queue.
2. Use sensor-only confidence mode when GPS unavailable.
3. If both network and GPS fail, switch to offline-autonomous state:
   - local signed token validation
   - deferred settlement sync
   - conflict resolution on reconnect
4. Merge strategy uses CRDT-inspired last-writer + trust-score arbitration.
