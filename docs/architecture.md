# Architecture

- Mobile captures sensor streams and user intents.
- Backend provides transactional booking orchestration.
- Firestore/Realtime distributes state for low-latency guard verification.
- Hash-chain audit log records immutable booking events.
- Reliability engine selects validation mode when network/GPS degrade.
