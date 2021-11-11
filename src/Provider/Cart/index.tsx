import React, { createContext, ReactNode, useContext, useState } from "react";

interface ItemProvider {
  addCart: (item: itemProps) => void;
  cart: itemProps[];
  rmvCart: (item: itemProps, setIsAtt: any) => void;
  clearItem: (item: itemProps) => void;
}
interface UserProps {
  children: ReactNode;
}

interface itemProps {
  title: string;
  price: number;
  type: string;
  img: string;
  id: number;
  quantity: number;
}
export const CartContext = createContext<ItemProvider>({} as ItemProvider);

export const CartProvider = ({ children }: UserProps) => {
  const [cart, setCart] = useState<itemProps[]>(
    localStorage.getItem("@BurgerKenzie:Cart")
      ? JSON.parse(localStorage.getItem("@BurgerKenzie:Cart") || "")
      : []
  );

  const addCart = (item: itemProps) => {
    let aux = cart.find((product: any) => product.id === item.id);
    if (!aux) {
      item.quantity += 1;
      setCart([...cart, item]);
      localStorage.setItem(
        "@BurguerKenzie:Cart",
        JSON.stringify([...cart, item])
      );
    } else {
      let x = [];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
          cart[i].quantity++;
        }
        x.push(cart[i]);
      }
      setCart(x);
      localStorage.setItem("@BurguerKenzie:Cart", JSON.stringify(x));
    }
  };
  const rmvCart = (item: itemProps, setIsAtt: any) => {
    if (item.quantity >= 1) {
      let x = [];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
          cart[i].quantity--;
        }
        x.push(cart[i]);
      }
      setCart(x);
      setIsAtt(false);
      localStorage.setItem("@BurguerKenzie:Cart", JSON.stringify(x));
    }

    if (item.quantity < 1) {
      console.log("here");
      let y = cart.filter((product: itemProps) => product.id !== item.id);
      setCart(y);
      localStorage.setItem("@BurguerKenzie:Cart", JSON.stringify(y));
    }
  };
  const clearItem = (item: itemProps) => {
    console.log("teste");
    let aux = cart.filter((product: itemProps) => product.id !== item.id);
    setCart(aux);
    localStorage.setItem("@BurguerKenzie:Cart", JSON.stringify(aux));
  };

  return (
    <CartContext.Provider value={{ addCart, cart, rmvCart, clearItem }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
