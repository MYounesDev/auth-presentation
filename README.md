#  Authorization Presentation


**Visit here to see the presentation** ([auth-presentation.vercel.app/](https://auth-presentation.vercel.app/))

> Comprehensive and technical presentation designed for **Computer Engineering** students.
> Concepts · Models · Architecture · Code Implementations · Real-world Case Studies.

---


##  Presentation Contents (Agenda)

This presentation explores the authorization layer in modern software systems from the ground up:

1. **Core Concepts**
   - Authentication (AuthN) vs. Authorization (AuthZ) differences
   - Core Terms: *Principal, Resource, Permission, Policy*
   - HTTP Status Codes: `401 Unauthorized` vs. `403 Forbidden`
2. **Authorization Models**
   - DAC (Discretionary) & MAC (Mandatory)
   - RBAC (Role-Based) & ABAC (Attribute-Based)
   - ReBAC (Relationship-Based)
3. **Architecture & Standards**
   - The role of OAuth 2.0 & OpenID Connect (OIDC)
   - JSON Web Tokens (JWT) & Security
   - Centralized Authorization (OPA - Open Policy Agent, Google Zanzibar)
4. **Code Implementations**
   - Node.js / Express.js AuthZ middleware design in MVC architecture
5. **Multi-layered Authorization**
   - Tenant (Organization) Isolation & Ownership Controls
6. **Vulnerabilities & Threats**
   - OWASP Top 10 #1: *Broken Access Control*
   - IDOR / BOLA (Insecure Direct Object Reference)
7. **Real-world Case Studies**
   - Technical analysis of some of the largest historical data breaches

---

##  Quick Start (Slidev)

This presentation is built with [Slidev](https://sli.dev/). To run it locally on your machine, follow these steps:

###  Prerequisites

- Node.js (v18+)
- `pnpm` (or `npm` / `yarn`)

###  Installation

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

The server will automatically open the presentation in your default browser once it starts (usually at `http://localhost:3030`).

---

##  Editing the Presentation

To edit the presentation content, simply modify the [slides.md](file:///d:/github/auth-presentation/slides.md) file. The presentation in the browser will update instantly on save (Hot Module Replacement).

---

##  Exporting the Presentation

To export the presentation as a PDF or HTML:

```bash
# Export to PDF (requires Playwright)
pnpm run export
```

---
*This project is prepared as an educational material for computer engineering.*
