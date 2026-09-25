# 📋 Test.io Exploratory Testing Checklist — Warkop Sentosa Modern App

> **Test Cycle Target:** Warkop Sentosa ([https://warkop-modern-app.vercel.app](https://warkop-modern-app.vercel.app))  
> **Platform Scope:** Web Mobile Responsive (iOS Safari, Android Chrome), Desktop (Chrome, Safari, Firefox, Edge)  
> **Tester Focus:** Usability, Cart & Checkout, QR Dine-in, Split Bill, QRIS Payment, Thermal Receipt, Edge Cases, Real Devices Only  
> **Author & QA Lead:** Zeno  

---

## ⚡ Priority 1 — Core Functionality (High Severity Potential ★)

### 1.1 Multi-Item Cart & WhatsApp Checkout Flow
- [ ] **Repeated Item Addition:** Add the same item multiple times from the menu catalog. Ensure item quantities accumulate correctly across menu card badges, the navbar pill, and the floating cart bar. ★
- [ ] **Quantity Manipulation in Drawer:** Adjust quantities using `+` and `-` buttons inside the cart drawer. Ensure per-item subtotals and the grand total recalculate in real time without lag.
- [ ] **Zero-Quantity Boundary:** Decrement an item's quantity to 0. Verify the item is automatically removed from the cart without application freeze or crash.
- [ ] **Item Deletion (Trash Icon):** Click the trash icon on a cart item. Verify the item is removed immediately and the total price decrements proportionally.
- [ ] **Empty Cart Action (Clear All):** Click the "Clear Cart" button in the drawer header. Confirm the cart resets to its clean empty state and the floating bottom bar vanishes.
- [ ] **WhatsApp Checkout Message Encoding:** Click "Send Order to WhatsApp Cashier". Verify:
  - Destination WhatsApp number resolves to `+62 812-8990-2026`.
  - Special characters, line breaks, emojis, and spaces are properly URI-encoded (`%20`, `%0A`) with zero URL breakage. ★

### 1.2 QR Code Dine-in vs. Takeaway Flow
- [ ] **Automatic QR Table URL Detection:** Access the application with query parameter `?meja=05` or `?table=12`. Verify:
  - Sticky green notification banner *"Dine-In Mode Active: Table XX"* appears at the top. ★
  - Checkout form table field auto-populates with "05".
  - Order type radio automatically locks to "Dine-In".
- [ ] **Mandatory Table Validation (Dine-in):** Clear the table number field and attempt WhatsApp checkout while in "Dine-In" mode. Confirm the system rejects the submission, displays a prompt, and focuses on the table input. ★
- [ ] **Takeaway / To-Go Mode:** Switch order type to "Takeaway". Verify table number input is hidden and WhatsApp payload specifies "Take Away / Bungkus".

### 1.3 Split Bill Fair-Share Calculator Flow
- [ ] **Split Bill Toggle:** Activate the "Kalkulator Patungan (Split Bill)" toggle. Confirm the calculation panel smoothly animates into view.
- [ ] **People Counter Boundaries (Min 2, Max 20):**
  - Test decrement button at count = 2. Ensure button is disabled and value never drops below 2. ★
  - Test increment button up to count = 20. Ensure button disables at 20.
- [ ] **Currency Rounding Math (Ceil Validation):** Input an odd order total (e.g., IDR 47,000) divided by 3 persons. Verify the per-person amount uses ceiling rounding (`Math.ceil`) to prevent small fractional currency discrepancies for cashiers.
- [ ] **Copy Split Summary to Clipboard:** Click "Salin ke Grup WA". Verify the "Tersalin!" checkmark toast appears and clipboard contains a structured breakdown of table, participant count, total bill, and individual share.
- [ ] **WhatsApp Payload Integration:** When split bill is active, confirm the generated WhatsApp message includes `👥 Patungan: X Orang (@ IDR XX.XXX/person)`. ★

### 1.4 Dual Payment Method & Interactive QRIS Modal Flow
- [ ] **Payment Radio Selection:** Toggle between "Tunai di Kasir" (Cash) and "QRIS (Scan Kasir)". Verify active styling changes and footer summary updates.
- [ ] **QRIS Modal Launch:** Select QRIS or click "Lihat QRIS". Confirm the modal dialog appears centered with a backdrop blur overlay.
- [ ] **QRIS Modal Accessibility:** Press the `Escape` key or click the backdrop overlay. Verify the QRIS modal closes smoothly without closing the underlying cart drawer.
- [ ] **One-Click Amount Copy:** Inside the QRIS modal, click "Salin Nominal". Verify the exact raw bill amount copies to the clipboard for swift pasting into mobile banking or e-wallet apps.
- [ ] **WhatsApp Tender Notation:** Verify the WhatsApp draft reflects `💳 Pembayaran: *Scan QRIS Kasir (Non-Tunai)*` when QRIS is selected, or `💵 Pembayaran: *Bayar Tunai di Kasir*` when Cash is selected. ★

### 1.5 Digital Thermal POS Receipt (Preview & Print) Flow
- [ ] **Launch Thermal Receipt:** Add at least 1 item to the cart, then click the "Struk" button next to WhatsApp checkout. Verify the thermal paper modal renders with dot-matrix styling and serrated paper edges.
- [ ] **Receipt Data Integrity:**
  - Auto-generated receipt number adheres to schema `WS-Mxx-xxxx`.
  - Transaction timestamp reflects current local date and time in WIB format.
  - Line-item breakdown, quantities, notes, subtotals, and total price match the cart state 100%.
  - If split bill is enabled, confirm fair-share breakdown is printed on the receipt body.
- [ ] **Copy Plain Text Receipt:** Click "Salin" in the receipt header bar. Confirm formatted plain text receipt copies to the clipboard with toast feedback.
- [ ] **Native Print (`window.print()`):** Click "Print". Confirm browser print preview dialog opens and CSS `@media print` cleanly isolates the receipt paper without web backgrounds or UI clutter. ★
- [ ] **Keyboard Dismiss:** Press `Escape` while the receipt modal is visible. Confirm the receipt modal closes back to the cart drawer.

### 1.6 Printable Acrylic Table Tent QR Generator Flow
- [ ] **Generator Access Points:**
  - Click "Cetak Stand Akrilik Meja (QR)" inside the `DemoTableSwitcher` widget. Confirm the generator modal opens immediately.
  - Click "Cetak Stand Meja QR (Khusus Pemilik)" in the footer navigation. Confirm the generator modal also opens properly.
- [ ] **Dynamic Table Selection:**
  - Select preset buttons (e.g., 01, 08, 12, VIP-1). Confirm the table card badge and QR code dynamically update in real time.
  - Enter a custom table identifier (e.g., "VIP-99"). Confirm the card immediately renders "VIP-99".
- [ ] **Target URL Validation:** Verify the target link URL specifies the selected table query parameter (e.g., `https://.../?meja=08`).
- [ ] **Test Open Table Simulation:** Click "Tes Buka Meja". Confirm a new browser tab opens with the targeted table URL and the active dine-in banner triggers. ★
- [ ] **Print Table Tent (A6 Format):** Click "Cetak Stand Meja (Print A6)". Confirm the print preview displays a clean, high-resolution A6 table tent layout ready for acrylic stands. ★
- [ ] **Escape Key Listener:** Press `Escape` on keyboard. Confirm the generator modal closes cleanly.

---

## 🔢 Priority 2 — Edge Cases & Boundary Conditions (High Bug Bounty Potential ★)

- [ ] **Extreme Characters in Cooking Notes:** Input non-alphanumeric characters: `!@#$%^&*()_+{}|:"<>?~` and lengthy text (150+ characters). Ensure text does not break cart card layout and preserves legibility in WhatsApp. ★
- [ ] **Unusual Table Identifier Inputs:** Input alphanumeric strings like `VIP-01`, `Meja 99B`, or `0`. Confirm system validates and binds without application error.
- [ ] **Cart State Persistence Across Refreshes:** Populate cart with 3 items and custom cooking notes, then perform a hard refresh (`Cmd+Shift+R` / `F5`) or restart the browser. Verify the entire cart persists via `localStorage`. ★
- [ ] **Empty Search Query Handling:** Search for nonexistent items (e.g., "pizza", "sushi", "xoxoxo"). Verify the empty state component renders gracefully with a functional "Reset Pencarian" action.
- [ ] **Late-Night Operating Hours Rollover (03:00 AM WIB):** Adjust device clock to 04:00 AM WIB. Verify the operational badge transitions to *"🔴 Sedang Istirahat • Buka jam 09.00 WIB"*. ★

---

## 📱 Priority 3 — Mobile UI/UX & Responsiveness (95% User Traffic)

- [ ] **Narrow Viewport (iPhone SE / 375px):** Test at 375px viewport width. Verify zero unexpected horizontal scrolling or horizontal overflow white gaps on the right edge.
- [ ] **Touch Target Sizing (Thumb Ergonomics):** Verify `+`, `-`, close modal `X`, and navigation buttons meet the 44x44px minimum touch target standard for single-thumb mobile usability.
- [ ] **Floating Cart Bar Positioning:** Confirm the floating bottom bar does not obscure critical buttons or get cropped by mobile virtual keyboards when typing in notes.
- [ ] **Drawer Animation Performance:** Rapidly open and close the drawer on a physical mobile device. Verify slide-in transitions and backdrop blur maintain a smooth 60fps frame rate without stutter.

---

## 📲 Priority 4 — Social Sharing & Link Previews

- [ ] **OpenGraph Link Preview in WhatsApp / Slack:** Paste the production URL in WhatsApp or Slack. Verify preview image, meta title, and description populate accurately.
- [ ] **Native Web Share API:** Tap "Ajak Squad Nongkrong" in the footer. Verify native device share sheet opens (or falls back to direct WhatsApp sharing with pre-filled text).
- [ ] **Vector Favicon Display:** Confirm browser tab displays the custom SVG coffee cup icon crisply across light and dark OS themes.

---

## ♿ Priority 5 — Accessibility (WCAG 2.2 AA) & Keyboard Navigation

- [ ] **Escape Key Modal Hierarchy:** Open nested modals (e.g., Cart Drawer ➔ QRIS / Receipt Modal) and press `Escape`. Confirm only the topmost modal closes per key press.
- [ ] **Keyboard Tab Navigation Flow:** Navigate the full interface using `Tab` and `Shift+Tab`. Ensure interactive elements have distinct focus rings (`focus-visible:ring-2`).
- [ ] **Screen Reader Auditing (VoiceOver / TalkBack):** Enable screen reader on smartphone. Verify icon-only buttons (cart bag, remove item, close dialogs) announce meaningful accessibility labels.

---

## 💡 Bug Reporting Guidelines (test.io Standard)
1. **Title Formula:** `[Component/Feature] - User Action - Actual Error Observed`  
   *Example:* `[Cart Drawer] - Decrementing quantity of single item to 0 - Empty cart message does not re-render`
2. **Device Specification:** Always state physical device details (e.g., *iPhone 13, iOS 17.4, Mobile Safari* or *Samsung Galaxy S22, Android 14, Chrome Mobile*).
3. **Evidence Attachments:** Include a crisp 15–20 second screen recording capturing the reproduction steps from start to finish.
