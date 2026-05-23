# MongoDB (Operational)

```mermaid
erDiagram
  USER ||--o{ BOOKING : creates
  HOST ||--o{ LOT : owns
  LOT ||--o{ SPOT : contains
  BOOKING ||--o{ AUDIT_EVENT : writes
  USER {
    string id
    string role
    string phone
    string email
    string trustScore
  }
  LOT {
    string id
    string hostId
    string geoPolygon
    number basePrice
  }
  SPOT {
    string id
    string lotId
    string status
  }
  BOOKING {
    string id
    string userId
    string lotId
    datetime startAt
    datetime endAt
    string status
  }
  AUDIT_EVENT {
    string id
    string bookingId
    string prevHash
    string hash
  }
```

# Firestore (Realtime)

```mermaid
graph TD
  A[realtime/lotAvailability/{lotId}] --> B[currentOccupancy]
  A --> C[freeSpots]
  D[realtime/bookingStatus/{bookingId}] --> E[state]
  D --> F[lastGuardScan]
  G[auditChain/{bookingId}/events/{eventId}] --> H[hash]
  G --> I[prevHash]
```
