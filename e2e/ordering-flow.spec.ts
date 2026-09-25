import { test, expect } from '@playwright/test';

test.describe('Sentosa Cafe - E2E Core Ordering & QA Suite', () => {

  test('1. QR Table Detection: Auto-binds table number from query parameters', async ({ page }) => {
    // Simulate user scanning table QR: ?table=04
    await page.goto('/?table=04');
    await page.waitForLoadState('networkidle');

    // Verify Dine-In table banner appears
    const tableBanner = page.locator('text=Dine-In Active: Table 04');
    await expect(tableBanner).toBeVisible();

    // Verify Demo Table Switcher shows Table 04
    const tableButton = page.locator('button:has-text("Table 04")');
    await expect(tableButton).toBeVisible();
  });

  test('2. Menu Search & Filters: Real-time category filtering and instant search', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check menu section title
    const menuTitle = page.locator('text=Artisanal Quality, Everyday Value');
    await expect(menuTitle).toBeVisible();

    // Search for "Noodles"
    const searchInput = page.getByRole('textbox', { name: /search cafe food and beverage/i });
    await searchInput.fill('Noodles');

    // Verify items matching "Noodles" are shown
    await expect(page.locator('text=Signature Garlic Scallion Noodles')).toBeVisible();

    // Clear search
    const clearButton = page.getByLabel('Clear search input');
    await clearButton.click();
    await expect(searchInput).toHaveValue('');
  });

  test('3. Multi-Currency Switcher: Seamless currency conversion between IDR and USD', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Default currency should be IDR
    await expect(page.getByRole('button', { name: /current currency/i }).first()).toContainText('IDR');

    // Switch to USD
    await page.getByRole('button', { name: /current currency/i }).first().click();
    await page.getByRole('menuitem', { name: /USD/i }).click();

    // Verify currency indicator changed to USD
    await expect(page.getByRole('button', { name: /current currency/i }).first()).toContainText('USD');

    // Verify menu items show $ symbol
    const firstPrice = page.locator('text=Signature Garlic Scallion Noodles').locator('..').locator('..').locator('text=$');
    await expect(firstPrice.first()).toBeVisible();
  });

  test('4. Item Customization & Add to Cart: Quantity, kitchen notes, and drawer review', async ({ page }) => {
    await page.goto('/?table=08');
    await page.waitForLoadState('networkidle');

    // Click Order on Signature Garlic Scallion Noodles
    const orderBtn = page.getByRole('button', { name: /order signature garlic scallion noodles/i });
    await orderBtn.click();

    // Modal dialog should appear
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Increase quantity to 2
    const plusBtn = dialog.getByLabel('Increase quantity');
    await plusBtn.click();
    await expect(dialog.getByText('2', { exact: true })).toBeVisible();

    // Add kitchen note
    const noteInput = dialog.locator('#order-dialog-note');
    await noteInput.fill('Extra crispy shallots, please');

    // Click Add to Dining Order
    const addToOrderBtn = dialog.getByRole('button', { name: /\+ add to dining order/i });
    await addToOrderBtn.click();

    // Dialog closes and toast appears
    await expect(dialog).not.toBeVisible();
    await expect(page.locator('text=2x Signature Garlic Scallion Noodles added')).toBeVisible();

    // Open cart drawer from navbar cart button
    const openCartBtn = page.getByRole('button', { name: /view order cart/i }).first();
    await openCartBtn.click();

    // Verify cart drawer is open with 2 items and note
    const cartDrawer = page.getByRole('dialog', { name: /dining order & checkout/i });
    await expect(cartDrawer).toBeVisible();
    await expect(cartDrawer.locator('text=Signature Garlic Scallion Noodles')).toBeVisible();
    await expect(cartDrawer.getByText(/Extra crispy shallots, please/i)).toBeVisible();
  });

  test('5. Fair-Share Group Bill Splitter & Keyboard Accessibility', async ({ page }) => {
    await page.goto('/?table=02');
    await page.waitForLoadState('networkidle');

    // Add item to cart
    await page.getByRole('button', { name: /order signature garlic scallion noodles/i }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /\+ add to dining order/i }).click();

    // Open cart drawer from navbar
    const openCartBtn = page.getByRole('button', { name: /view order cart/i }).first();
    await openCartBtn.click();

    const cartDrawer = page.getByRole('dialog', { name: /dining order & checkout/i });
    await expect(cartDrawer).toBeVisible();

    // Toggle Fair-Share Bill Splitter switch
    const splitSwitch = page.getByRole('switch', { name: /toggle fair-share bill splitter/i });
    await splitSwitch.click();

    // Verify split bill calculation appears
    await expect(page.locator('text=Pay Per Person:')).toBeVisible();

    // Test WCAG 2.2 AA Keyboard Accessibility: Press Escape key to dismiss drawer
    await page.keyboard.press('Escape');
    await expect(cartDrawer).not.toBeVisible();
  });

  test('6. Digital Thermal POS Receipt: Opens, displays metadata, and closes on Escape', async ({ page }) => {
    await page.goto('/?table=05');
    await page.waitForLoadState('networkidle');

    // Add an item
    await page.getByRole('button', { name: /order signature garlic scallion noodles/i }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /\+ add to dining order/i }).click();

    // Open cart drawer from navbar
    const openCartBtn = page.getByRole('button', { name: /view order cart/i }).first();
    await openCartBtn.click();

    // Click digital receipt button
    const receiptBtn = page.getByRole('button', { name: /preview digital pos receipt/i });
    await receiptBtn.click();

    // Verify thermal receipt modal opens
    const receiptModal = page.locator('#thermal-receipt-paper');
    await expect(receiptModal).toBeVisible();
    await expect(page.locator('text=SENTOSA CAFE & DINER').first()).toBeVisible();
    await expect(page.locator('text=WIFI: sentosajuara2026')).toBeVisible();

    // Dismiss with Escape key
    await page.keyboard.press('Escape');
    await expect(receiptModal).not.toBeVisible();
  });

});
