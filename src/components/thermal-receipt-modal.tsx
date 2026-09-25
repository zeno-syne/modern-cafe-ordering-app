'use client';

import React, { useState, useEffect } from 'react';
import { Printer, Copy, Check, X, Receipt } from 'lucide-react';
import { CartItem } from '@/context/cart-context';

interface ThermalReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  orderType: 'dine-in' | 'takeaway';
  tableNumber: string;
  customerName: string;
  paymentMethod: 'cash' | 'qris';
  splitBillEnabled: boolean;
  splitPeopleCount: number;
  perPersonShare: number;
}

export default function ThermalReceiptModal({
  isOpen,
  onClose,
  items,
  totalPrice,
  totalItems,
  orderType,
  tableNumber,
  customerName,
  paymentMethod,
  splitBillEnabled,
  splitPeopleCount,
  perPersonShare,
}: ThermalReceiptModalProps) {
  const [copied, setCopied] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('WS-20260925-01');
  const [transactionTime, setTransactionTime] = useState('');

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      setTransactionTime(`${now.toLocaleDateString('en-US', options)} GMT+7`);

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const tablePart = tableNumber ? `T${tableNumber.padStart(2, '0')}` : 'TA';
      setReceiptNumber(`WS-${tablePart}-${randomSuffix}`);
    }
  }, [isOpen, tableNumber]);

  // Close on Escape key press (WCAG Keyboard Accessibility)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const generatePlainTextReceipt = () => {
    const divider = '------------------------------------------';
    const doubleDivider = '==========================================';
    const tableInfo =
      orderType === 'dine-in'
        ? `Dine-In (Table ${tableNumber.trim() || '-'})`
        : 'Takeaway Express';

    const itemsText = items
      .map((i) => {
        let line = `${i.item.name}\n  ${i.quantity}x @${formatRupiah(i.item.price)} = ${formatRupiah(i.item.price * i.quantity)}`;
        if (i.notes) line += `\n  *Note: ${i.notes}`;
        return line;
      })
      .join('\n');

    const splitInfo = splitBillEnabled
      ? `\nSplit Bill     : ${splitPeopleCount} Guests\nPer Person     : ${formatRupiah(perPersonShare)}`
      : '';

    return (
      `            SENTOSA CAFE & DINER          \n` +
      `     Jl. Senopati Raya No. 42, Jaksel     \n` +
      `           Tel: +62 812-8990-2026         \n` +
      `${divider}\n` +
      `Receipt No: ${receiptNumber}\n` +
      `Timestamp : ${transactionTime}\n` +
      `Operator  : Zeno (POS-01)\n` +
      `Service   : ${tableInfo}\n` +
      `Guest     : ${customerName.trim() || 'Valued Guest'}\n` +
      `${doubleDivider}\n` +
      `${itemsText}\n` +
      `${divider}\n` +
      `Total Items    : ${totalItems} Portions\n` +
      `Service Charge : IDR 0 (INCLUDED)\n` +
      `TOTAL PAYABLE  : ${formatRupiah(totalPrice)}\n` +
      `${splitInfo}\n` +
      `${doubleDivider}\n` +
      `Payment Method : ${paymentMethod === 'qris' ? 'COUNTER QRIS' : 'CASH AT COUNTER'}\n` +
      `Payment Status : PENDING CASHIER CONFIRMATION\n` +
      `${divider}\n` +
      `WIFI PASSWORD  : sentosajuara2026\n` +
      `  Thank You for Dining at Sentosa Cafe!  \n` +
      `   Artisanal Brews • Great Vibes • 24/7   \n`
    );
  };

  const handleCopyText = async () => {
    const text = generatePlainTextReceipt();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Failed to copy receipt text.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="thermal-receipt-title"
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-sm sm:max-w-md my-auto z-10 space-y-3">
        
        {/* Action Header Bar (No-Print) */}
        <div className="flex items-center justify-between text-stone-200 print:hidden bg-[#1C1612]/90 backdrop-blur px-4 py-2.5 rounded-2xl border border-stone-800">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-[#EA580C]" />
            <span id="thermal-receipt-title" className="text-xs font-bold text-white font-display">
              Digital POS Receipt
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label="Copy receipt text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-[#EA580C]/30 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Print receipt"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label="Close receipt preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THERMAL PAPER RECEIPT VISUAL */}
        {/* ========================================================================= */}
        <div
          id="thermal-receipt-paper"
          className="relative bg-[#FAFAF8] text-stone-900 font-mono text-xs rounded-xl shadow-2xl p-5 sm:p-6 overflow-hidden border border-stone-300 select-text"
        >
          {/* Top Jagged Edge Mockup */}
          <div
            className="absolute top-0 left-0 right-0 h-2 bg-repeat-x print:hidden"
            style={{
              backgroundImage: `radial-gradient(circle, transparent 2px, #1C1612 2px)`,
              backgroundSize: '8px 8px',
              backgroundPosition: '0 -4px',
            }}
          />

          {/* Receipt Store Header */}
          <div className="text-center space-y-1 pb-3 border-b border-dashed border-stone-400">
            <h3 className="text-base sm:text-lg font-black tracking-wider text-stone-950 uppercase font-mono">
              SENTOSA CAFE &amp; DINER
            </h3>
            <p className="text-[11px] text-stone-600 leading-tight">
              Jl. Senopati Raya No. 42, Senopati Arts District
              <br />
              South Jakarta &bull; +62 812-8990-2026
            </p>
          </div>

          {/* Receipt Metadata */}
          <div className="py-2.5 border-b border-dashed border-stone-400 space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-500">Receipt No.</span>
              <span className="font-bold text-stone-900">{receiptNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Timestamp</span>
              <span>{transactionTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">POS Terminal</span>
              <span className="font-semibold text-stone-800">Zeno (POS-01)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Service</span>
              <span className="font-bold text-stone-900">
                {orderType === 'dine-in'
                  ? `Dine-In (Table ${tableNumber.trim() || '-'})`
                  : 'Takeaway Express'}
              </span>
            </div>
            {customerName.trim() && (
              <div className="flex justify-between">
                <span className="text-stone-500">Guest Name</span>
                <span className="font-semibold text-stone-900">{customerName.trim()}</span>
              </div>
            )}
          </div>

          {/* Items Breakdown */}
          <div className="py-3 border-b border-dashed border-stone-400 space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-stone-500 uppercase tracking-wider pb-1">
              <span>Item Description</span>
              <span>Subtotal</span>
            </div>

            {items.map((cartItem) => (
              <div key={cartItem.item.id} className="space-y-0.5 text-xs">
                <div className="flex justify-between font-bold text-stone-950">
                  <span className="max-w-[70%] truncate">{cartItem.item.name}</span>
                  <span>{formatRupiah(cartItem.item.price * cartItem.quantity)}</span>
                </div>
                <div className="flex justify-between text-[11px] text-stone-600 pl-1">
                  <span>
                    {cartItem.quantity} x {formatRupiah(cartItem.item.price)}
                  </span>
                </div>
                {cartItem.notes && (
                  <p className="text-[10px] text-stone-500 italic pl-1">
                    * Note: {cartItem.notes}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Totals & Calculations */}
          <div className="py-2.5 border-b border-dashed border-stone-400 space-y-1.5 text-xs">
            <div className="flex justify-between text-stone-700">
              <span>Total Items ({totalItems} portions)</span>
              <span>{formatRupiah(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-stone-700">
              <span>Service Charge &amp; Tax</span>
              <span className="text-emerald-700 font-bold">IDR 0 (INCLUDED)</span>
            </div>
            <div className="flex justify-between items-center text-sm font-black pt-1.5 border-t border-stone-300 text-stone-950">
              <span>TOTAL PAYABLE</span>
              <span className="text-base font-black">{formatRupiah(totalPrice)}</span>
            </div>
          </div>

          {/* Split Bill Info (If Enabled) */}
          {splitBillEnabled && (
            <div className="py-2 border-b border-dashed border-stone-400 bg-amber-50/80 -mx-2 px-2 rounded-lg text-xs space-y-1 my-1">
              <div className="flex justify-between text-amber-900 font-bold">
                <span>Split Bill ({splitPeopleCount} Guests)</span>
                <span>@{formatRupiah(perPersonShare)} / person</span>
              </div>
            </div>
          )}

          {/* Payment Method & Status */}
          <div className="py-2.5 border-b border-dashed border-stone-400 space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-stone-500">Payment Method</span>
              <span className="font-bold text-stone-900">
                {paymentMethod === 'qris' ? 'COUNTER QRIS' : 'CASH AT COUNTER'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Payment Status</span>
              <span className="px-1.5 py-0.5 bg-stone-200 text-stone-800 text-[10px] font-bold rounded">
                PENDING CASHIER CONFIRMATION
              </span>
            </div>
          </div>

          {/* Barcode & WiFi Footer */}
          <div className="pt-4 text-center space-y-2">
            {/* Mock Vector Barcode */}
            <div className="flex justify-center items-center gap-[2px] h-8 max-w-[200px] mx-auto opacity-85">
              {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1].map(
                (w, i) => (
                  <div
                    key={i}
                    className="h-full bg-stone-900"
                    style={{ width: `${w * 1.5}px` }}
                  />
                )
              )}
            </div>
            <p className="text-[10px] text-stone-500 tracking-widest uppercase">
              *{receiptNumber}*
            </p>

            <div className="pt-2 border-t border-stone-300 space-y-1">
              <div className="inline-block bg-stone-200/90 px-3 py-1 rounded text-[11px] font-bold text-stone-800">
                WIFI: <span className="font-black text-stone-950">sentosajuara2026</span>
              </div>
              <p className="text-[11px] font-bold text-stone-800 pt-1">
                Thank You for Dining with Us!
              </p>
              <p className="text-[10px] text-stone-500">
                Artisanal Brews &bull; Comfort Bites &bull; High-Speed Work Sanctuary
              </p>
            </div>
          </div>

          {/* Bottom Jagged Edge Mockup */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2 bg-repeat-x print:hidden"
            style={{
              backgroundImage: `radial-gradient(circle, transparent 2px, #1C1612 2px)`,
              backgroundSize: '8px 8px',
              backgroundPosition: '0 4px',
            }}
          />
        </div>

      </div>
    </div>
  );
}
