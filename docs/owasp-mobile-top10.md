# OWASP Mobile Top 10 Controls (Mapping)

- M1 Improper Credential Usage -> secure storage, short-lived tokens.
- M2 Inadequate Supply Chain Security -> lockfiles + CI checks.
- M3 Insecure Auth -> OTP + email verification + token refresh rotation.
- M4 Insufficient Input Validation -> zod schemas.
- M5 Insecure Communication -> TLS-only and cert pinning plan.
- M6 Inadequate Privacy Controls -> minimization + scoped retention.
- M7 Insufficient Binary Protections -> jailbreak/root detection plan.
- M8 Security Misconfiguration -> env-scoped secrets.
- M9 Insecure Data Storage -> encrypted at rest for sensitive artifacts.
- M10 Insufficient Cryptography -> SHA-256 hash chain + signed tokens.
