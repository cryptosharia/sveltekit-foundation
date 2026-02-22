# CryptoSharia Platform Context

This document describes platform-level principles for CryptoSharia (PT Kripto Syariah Indonesia)
SvelteKit apps.

CryptoSharia is an early-stage team building Sharia-compliant crypto education and products for
Indonesian Muslims.

The mission: helping Indonesian Muslims navigate the Web3 and crypto space the halal way through
media, education, and community.

The vision: to become Indonesia's primary reference for Sharia-compliant crypto.

## Ecosystem Principles (Platform-Level)

- API-first backbone: a central API (CryptoSharia API) serves multiple first-party platforms.
- Unified identity: authentication and user management are centralized (SSO across subdomains).
- Server-to-server security: platforms communicate with upstream APIs primarily via the SvelteKit server (BFF).
- BFF-only default: direct browser-to-API calls for protected data are not supported; CORS may be intentionally absent.
- Modular and scalable: assume multiple consumers with different needs.
