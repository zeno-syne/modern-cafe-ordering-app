# ☕ Sentosa Cafe & Diner — Modern QR Table Ordering & Smart POS Experience

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-emerald?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **Live Production Demo:** [https://warkop-modern-app.vercel.app](https://warkop-modern-app.vercel.app)  
> **Product Builder & QA Lead:** Zeno  

---

## 📌 Executive Summary & Problem Statement

In the fast-paced casual F&B industry (coffee shops, casual diners, and Asian bistro hangouts), brick-and-mortar operators face recurring operational bottlenecks:
1. **Queue Bottlenecks & Manual Order Mistakes:** Cashiers and baristas struggle during evening rush hours, resulting in incorrect table deliveries or missed kitchen customizations (*e.g., "half-sweet coffee", "soft-boiled noodles with 5 bird-eye chilies"*).
2. **Expensive SaaS POS Subscriptions:** Commercial cloud POS systems charge recurring monthly fees ($25 to $70+/month per outlet), heavily eating into small business profit margins.
3. **Customer App-Install Fatigue:** Diners refuse to download dedicated mobile apps or go through tedious sign-ups just to order a snack and iced coffee.

### 💡 Product Solution:
**Sentosa Modern Cafe Ordering App** is an ultra-fast, zero-friction, mobile-first web ordering platform requiring **no app installation and no account registration**:
* **Instant Table Locking:** Diners simply scan an acrylic QR code stand on their table using their phone camera.
* **Smart Cart & Customization:** Select items with custom kitchen notes, calculate quantities, and compute split-bill totals in real time.
* **WhatsApp POS Integration:** Direct formatted digital receipt dispatch to the cashier's WhatsApp terminal for immediate fulfillment.
* **Zero Monthly SaaS Overhead:** Completely self-hosted on modern serverless edge architecture.

---

## 🚀 Key Features & Technical Architecture

### 1. Smart QR Table Detection (`?meja=XX`)
* **Dynamic Table Binding:** URL query parameter auto-detection (e.g., `?meja=05`) binds table numbers directly to the state machine, displaying a sticky table banner.
* **Interactive Client Demo Switcher:** Built-in floating widget (`DemoTableSwitcher`) allowing prospective clients and stakeholders to test table hopping and takeaway modes in one click without physical QR codes.

### 2. Multi-Item Cart & State Persistence
* Architected with **React 19 Context API** (`CartContext`) paired with resilient `localStorage` synchronization.
* Customer carts persist seamlessly across browser refreshes, tab closures, and unstable mobile network drops.

### 3. POS-Ready WhatsApp Order Payload Generator
* Compiles clean, human-readable receipts formatted directly into WhatsApp URL schema:
  * Order type (Dine-In Table No. vs. Takeaway).
  * Customer name & table identifier.
  * Line-item breakdown with item notes and quantities.
  * Payment method indicator and split-bill summary.
  * 100% accurate total calculation to prevent manual cashier calculation errors.

### 4. Real-Time Operational Logic (Asia/Jakarta Timezone)
* Custom hook `useOperationalStatus` deterministically calculates operating status based on WIB (`Asia/Jakarta`) hours:
  * **Weekdays (Mon–Fri):** 09:00 AM to 01:00 AM WIB (Midnight).
  * **Weekends (Sat–Sun):** 09:00 AM to 02:00 AM WIB (Midnight).
* Automatically shifts UI indicators between *"🟢 Open for Dine-In"* and *"🔴 Closed / Rest Hours"* without manual merchant intervention.

### 5. Sub-Second Instant Search & Category Filtering
* Client-side zero-latency search engine that matches keywords across item titles, ingredients, flavor profiles, and promotional badges with an interactive empty state.

### 6. Fair-Share Split Bill Calculator
* Real-time bill splitter tailored for squad dining (2 to 20 people) using integer ceil rounding (`Math.ceil`) to prevent fractional currency losses.
* Single-click **"Copy Split Summary"** button to share an instant payment breakdown to group chats.

### 7. Dual Payment Gateway & Interactive QRIS Modal
* Flexible tender selection: **💵 Cash at Counter** vs. **📲 QRIS Digital Payment**.
* Authentic national QRIS modal with vector SVG mockups, merchant identification (`WARKOP SENTOSA`), and a one-click **"Copy Nominal"** utility for banking app pasting.

### 8. Digital Thermal Paper POS Receipt
* Authentic 58mm/80mm thermal receipt popover styled with dot-matrix typography, serrated paper tear edges, order timestamp, and store WiFi credentials (`sentosajuara2026`).
* Optimized with clean `@media print` CSS rules for direct thermal printer hardware compatibility.

### 9. Printable Acrylic Table Tent QR Generator
* Operational utility for cafe owners: generates high-resolution, print-ready A6 acrylic table tent inserts for Tables 01 to 12, VIP booths, or custom tables.
* Equipped with customer 3-step onboarding instructions and a **"Test Open Table"** simulation shortcut.

### 10. Accessibility & Mobile Ergonomics (WCAG 2.2 AA)
* **Keyboard Navigation:** Full `Escape` key listeners to dismiss all modals and drawers hierarchically.
* **Touch Target Standards:** 100% compliance with Apple HIG & Android WCAG 2.5.5 touch target sizing (minimum 44x44px interactive regions).
* **Semantic ARIA:** Explicit ARIA roles, dialog modal tags, screen-reader labels, and focus rings.

---

## 🛡️ Quality Assurance & Test.io Rigor

This project adheres to the rigorous QA exploratory standards practiced on crowdsourced testing platforms like **test.io**:

📄 **[View Full QA Exploratory Checklist (TESTING_CHECKLIST.md)](./TESTING_CHECKLIST.md)**
* **Priority 1 (Core Functional):** Cart state mutations, WhatsApp URL encoding, QR parameter binding.
* **Priority 2 (Edge Cases & Boundaries):** Extreme characters in notes (`!@#$%^&*()_+`), boundary quantity counters, midnight operational rollover.
* **Priority 3 (Mobile Responsiveness):** Viewports from 375px (iPhone SE) to 4K displays, zero horizontal overflow.
* **Priority 4 (Social Metadata):** OpenGraph previews, Web Share API, SVG vector favicon.
* **Priority 5 (Accessibility):** VoiceOver/TalkBack labels, keyboard tab order, focus containment.

---

## 🛠️ Technology Stack & Engineering Rationale

| Architecture Layer | Technology | Engineering Rationale |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Server-side rendering, zero-bundle overhead, modern Turbopack compilation |
| **UI Library** | React 19 | Modern concurrent features, native hooks, efficient component lifecycle |
| **Styling** | Tailwind CSS v4 | High-performance CSS engine, responsive token utility system |
| **Icons** | Lucide React | Lightweight, tree-shakable, accessible vector icons |
| **Deployment** | Vercel Edge Network | Low-latency global CDN with automated CI/CD branch preview deployments |

---

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zeno-syne/modern-cafe-ordering-app.git
   cd modern-cafe-ordering-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```text
   http://localhost:3000
   ```

5. **Run production build verification:**
   ```bash
   npm run build
   ```

---

## 👤 Product Builder & Contact

Crafted with dedication by:
* **Lead Engineer & QA:** Zeno
* **Specialization:** Product Builder, Frontend Engineer & QA Specialist (Freelance Tester at test.io)
* **GitHub Profile:** [@zeno-syne](https://github.com/zeno-syne)
* **Live Application:** [warkop-modern-app.vercel.app](https://warkop-modern-app.vercel.app)
