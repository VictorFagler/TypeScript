import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { PRODUCTS } from '../products';

interface ShopContextProps {
  cartItems: { [itemId: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
}

export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

const getCartItems = () => {
  return {} as { [itemId: number]: number };
};

export const ShopContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [cartItems, setCartItems] = useState<{ [itemId: number]: number }>(getCartItems());

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
    }
  }, []);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] < 1) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: newAmount };
      if (updatedCart[itemId] < 1) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo!.price;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
