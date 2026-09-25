'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/coffee-menu';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export type OrderType = 'dine-in' | 'takeaway';
export type Currency = 'IDR' | 'USD' | 'SGD' | 'EUR';

export const CURRENCY_CONFIG: Record<
  Currency,
  { symbol: string; rate: number; label: string; flag: string }
> = {
  IDR: { symbol: 'Rp', rate: 1, label: 'IDR (Rp)', flag: '🇮🇩' },
  USD: { symbol: '$', rate: 0.0000625, label: 'USD ($)', flag: '🇺🇸' }, // ~16,000 IDR
  SGD: { symbol: 'S$', rate: 0.0000833, label: 'SGD (S$)', flag: '🇸🇬' }, // ~12,000 IDR
  EUR: { symbol: '€', rate: 0.0000571, label: 'EUR (€)', flag: '🇪🇺' }, // ~17,500 IDR
};

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  orderType: OrderType;
  tableNumber: string;
  customerName: string;
  totalItems: number;
  totalPrice: number;
  qrDetectedTable: string | null;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInIDR: number) => string;
  setIsCartOpen: (open: boolean) => void;
  setOrderType: (type: OrderType) => void;
  setTableNumber: (table: string) => void;
  setCustomerName: (name: string) => void;
  addItem: (item: MenuItem, quantity?: number, notes?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateNotes: (itemId: string, notes: string) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'warkop_sentosa_cart_v1';
const CURRENCY_STORAGE_KEY = 'sentosa_currency_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [qrDetectedTable, setQrDetectedTable] = useState<string | null>(null);
  const [currency, setCurrencyState] = useState<Currency>('IDR');
  const [isHydrated, setIsHydrated] = useState(false);

  // Read saved cart, currency, and URL table params on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }

      const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;
      if (savedCurrency && CURRENCY_CONFIG[savedCurrency]) {
        setCurrencyState(savedCurrency);
      }
    } catch {
      // Ignore storage errors
    }

    // Check URL parameters for QR scan (e.g. ?meja=05 or ?table=05)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const mejaParam = params.get('meja') || params.get('table');
      if (mejaParam) {
        const cleanTable = mejaParam.trim();
        setTableNumber(cleanTable);
        setQrDetectedTable(cleanTable);
        setOrderType('dine-in');
      }
    }

    setIsHydrated(true);
  }, []);

  // Save items to localStorage whenever it changes (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items, isHydrated]);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, c);
    } catch {
      // Ignore storage errors
    }
  };

  const formatPrice = (amountInIDR: number): string => {
    if (currency === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amountInIDR);
    }

    const converted = amountInIDR * CURRENCY_CONFIG[currency].rate;
    const localeMap: Record<Currency, string> = {
      IDR: 'id-ID',
      USD: 'en-US',
      SGD: 'en-SG',
      EUR: 'de-DE',
    };

    return new Intl.NumberFormat(localeMap[currency], {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(converted);
  };

  const addItem = (item: MenuItem, quantity = 1, notes = '') => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        const current = updated[existingIndex];
        updated[existingIndex] = {
          ...current,
          quantity: current.quantity + quantity,
          notes: notes.trim() ? notes.trim() : current.notes,
        };
        return updated;
      } else {
        return [...prev, { item, quantity, notes: notes.trim() }];
      }
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, quantity } : i))
    );
  };

  const updateNotes = (itemId: string, notes: string) => {
    setItems((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, notes } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const getItemQuantity = (itemId: string): number => {
    const found = items.find((i) => i.item.id === itemId);
    return found ? found.quantity : 0;
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        orderType,
        tableNumber,
        customerName,
        totalItems,
        totalPrice,
        qrDetectedTable,
        currency,
        setCurrency,
        formatPrice,
        setIsCartOpen,
        setOrderType,
        setTableNumber,
        setCustomerName,
        addItem,
        removeItem,
        updateQuantity,
        updateNotes,
        clearCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
