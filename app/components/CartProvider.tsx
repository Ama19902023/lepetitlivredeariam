"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  variantId: number;
  handle: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  maxQuantity: number;
};

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;

  addItem: (item: CartItem) => void;
  removeItem: (variantId: number) => void;
  setQuantity: (
    variantId: number,
    quantity: number
  ) => void;
  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | null>(null);

const STORAGE_KEY = "ariam-cart";

export default function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart =
        window.localStorage.getItem(STORAGE_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error(
        "Erreur chargement panier :",
        error
      );
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items, loaded]);

  function addItem(item: CartItem) {
    setItems((currentItems) => {
      const existing =
        currentItems.find(
          (current) =>
            current.variantId === item.variantId
        );

      if (existing) {
        return currentItems.map((current) => {
          if (
            current.variantId !== item.variantId
          ) {
            return current;
          }

          return {
            ...current,
            quantity: Math.min(
              current.quantity + item.quantity,
              current.maxQuantity
            ),
          };
        });
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: Math.min(
            item.quantity,
            item.maxQuantity
          ),
        },
      ];
    });
  }

  function removeItem(variantId: number) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          item.variantId !== variantId
      )
    );
  }

  function setQuantity(
    variantId: number,
    quantity: number
  ) {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.variantId !== variantId) {
          return item;
        }

        return {
          ...item,
          quantity: Math.max(
            1,
            Math.min(
              quantity,
              item.maxQuantity
            )
          ),
        };
      })
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total +
          item.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addItem,
        removeItem,
        setQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé dans CartProvider"
    );
  }

  return context;
}