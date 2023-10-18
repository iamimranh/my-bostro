import React, { createContext, useEffect, useState } from "react";
import type { CartItem } from "../../models/Cart";

const CART_KEY = "mycart";
let checkInitial = false;

export type CartcontextType = {
  cartList: CartItem[];
  updateCart: (cart: CartItem) => void;
  resetCart: () => void;
};
export const CartContext = createContext<CartcontextType | null>(null);

const CartStore = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  const updateCart = (cart: CartItem) => {
    const existCartItem = cartList.find(
      (item) => item.product === cart.product
    );
    if (existCartItem) {
      if (cart.quantity === 0) {
        setCartList((cList) =>
          cList.filter((item) => item.product !== cart.product)
        );
      } else {
        setCartList((cList) =>
          cList.map((item) => (item.product === cart.product ? cart : item))
        );
      }
    } else {
      setCartList([...cartList, cart]);
    }
  };

  const resetCart = () => {
    setCartList([]);
  };

  useEffect(() => {
    if (checkInitial) {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cartList));
    } else {
      checkInitial = true;
    }
  }, [cartList]);

  useEffect(() => {
    const localStoreCart = window.localStorage.getItem(CART_KEY);
    if (!localStoreCart) return;
    setCartList(JSON.parse(localStoreCart));
  }, []);

  return (
    <CartContext.Provider value={{ cartList, updateCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStore;
