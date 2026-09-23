'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/coffee-menu';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export type OrderType = 'dine-in' | 'takeaway';

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  orderType: OrderType;
  tableNumber: string;
  customerName: string;
  totalItems: number;
  totalPrice: number;
  qrDetectedTable: string | null;
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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [qrDetectedTable, setQrDetectedTable] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Read saved cart and URL table params on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
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
