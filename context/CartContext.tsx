"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Product = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

type CartItem = Product & {
  cantidad: number;
};

type CartContextType = {
  carrito: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [carrito, setCarrito] = useState<CartItem[]>([]);

  /* CARGAR LOCALSTORAGE */
  useEffect(() => {

    const savedCart =
      localStorage.getItem("carrito");

    if (savedCart) {
      setCarrito(JSON.parse(savedCart));
    }

  }, []);

  /* GUARDAR LOCALSTORAGE */
  useEffect(() => {

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

  }, [carrito]);

  const addToCart = (product: Product) => {

    setCarrito((prev) => {

      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          cantidad: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: number) => {

    setCarrito((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeFromCart,
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
      "useCart debe usarse dentro de CartProvider"
    );
  }

  return context;
}