# 🏔️ Range Front

![Next.js](https://img.shields.io/badge/Next.js-12-black?logo=next.js)
![React](https://img.shields.io/badge/React-17-61dafb?logo=react)
![GraphQL](https://img.shields.io/badge/GraphQL-Apollo-e535ab?logo=graphql)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-336791?logo=postgresql)
![Styled Components](https://img.shields.io/badge/Styled--Components-💅-db7093)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635bff?logo=stripe)
![License](https://img.shields.io/badge/License-MIT-green)

![Range Front](./frontend/public/range-front.webp)

---

**Range Front** is a full-stack commerce platform demonstrating role-based access control, GraphQL API design, payment workflows, and production deployment.

🔗 **Live demo:**
[https://range-front.vercel.app/](https://range-front.vercel.app/)

---

## ✨ Features

* 🛒 Full shopping cart with persistent state
* 👤 User authentication & authorization
* 🔐 Secure password hashing and JWT sessions
* 💳 Stripe-powered checkout flow
* 📧 Transactional email receipts sent via Stripe webhooks
* 📦 Order history with itemized orders
* 🧾 Admin product & user management
* ⚡ Optimistic UI updates with Apollo Client

---

## 🧰 Tech Stack

### Frontend

* **Next.js 12**
* **React 17**
* **Apollo Client**
* **Styled Components**
* **React Hot Toast**
* **NProgress**

### Backend

* **Node.js**
* **GraphQL**
* **Prisma**
* **PostgreSQL**
* **JWT Authentication**
* **bcrypt**

---

## 📁 Project Structure

```text
/
├── frontend/        # Next.js application
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   └── lib/
└── backend/         # GraphQL API & Prisma schema
    ├── resolvers/
    ├── prisma/
    └── utils/
```

---

## 🏗️ Architecture

* **Frontend:** Server-rendered **Next.js** application leveraging **Apollo Client** for efficient GraphQL data fetching, normalized caching, and optimistic UI updates.
* **API Layer:** **Node.js GraphQL** service implementing domain-driven resolvers, role-based access control (RBAC), and permission-aware mutations.
* **Data Layer:** **PostgreSQL** database accessed via **Prisma ORM**, enforcing schema-level constraints, relations, and transactional integrity.
* **Payments:** **Stripe** integration supporting secure checkout flows, server-side payment intents, and webhook-driven order state reconciliation.
* **Payments & Notifications:** Stripe webhooks drive order finalization and transactional email receipts, ensuring post-payment side effects occur server-side and remain idempotent.
* **Authentication & Security:** JWT-based session management, bcrypt password hashing, and server-side authorization checks to protect sensitive operations.
* **Deployment & Infrastructure:**
  * **Vercel** for frontend hosting with edge caching and fast global delivery
  * **Render** for backend GraphQL API and managed PostgreSQL
  * **Resend** for webhook-triggered transactional email delivery (order receipts)

### System Flow

```text
Client Browser
   ↓
Next.js (Vercel)
   ↓ Apollo Client (GraphQL)
Node.js API (Render)
   ↓ Prisma ORM
PostgreSQL
   ↓
Stripe (Payments & Webhooks)
```

### Engineering Focus

* Clear separation of concerns between presentation, API, and data layers
* Production-grade auth, authorization, and payment handling
* Scalable GraphQL schema design supporting admin and user workflows
* Deployed architecture mirroring real-world SaaS commerce systems

---

## ⚡️ Performance & UX

* **Core Web Vitals instrumentation:** Real-user performance metrics (LCP, INP, CLS) are tracked in production using Vercel Speed Insights to ensure consistent, measurable UX quality.
* **Optimistic UI patterns:** Apollo Client optimistic mutations provide instant feedback for cart and admin actions while maintaining eventual consistency with the backend.
* **Perceived performance:** Route transition feedback via NProgress and toast notifications keeps user interactions responsive and predictable.
* **Efficient data fetching:** Normalized GraphQL caching minimizes over-fetching and redundant network requests.
* **Layout stability:** Image dimensions and UI structure are designed to prevent layout shifts during loading.
* **Resilient API UX:** Frontend loading and error states account for backend latency and cold starts, ensuring graceful degradation.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* PostgreSQL
* Stripe account (for payments)

### Install dependencies

```bash
cd frontend && npm install
cd ../backend && npm install
```

### Environment variables

Create `.env` files in both `frontend` and `backend` directories.

Example backend `.env`:

```env
DATABASE_URL=postgresql://...
APP_SECRET=your-secret
STRIPE_SECRET=sk_test_...
```

### Run locally

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

---

## 🧪 Testing

* Jest
* React Testing Library
* Snapshot testing
* Mocked Apollo queries

```bash
npm test
```

---

## 🛡️ Security Notes

* Email addresses are enforced as **unique at the database level**
* Passwords are hashed with **bcrypt**
* Authorization is enforced server-side
* Sensitive errors are sanitized before reaching the client

---

## 📄 License

MIT

---

## 👋 Author

**William Blake**
Full-stack engineer with a focus on React, GraphQL, and system design.

---

If you like this project, feel free to ⭐ the repo!
