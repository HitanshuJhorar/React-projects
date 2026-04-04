import { useState } from "react";
import { getProductId } from "../Data/products";
import { CartContext } from "./cart-context";

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  function addToCart(productId) {
    const normalizedId = Number(productId);
    const existing = cartItem.find((item) => item.id === normalizedId);

    if (existing) {
      const updatedCartItems = cartItem.map((item) =>
        item.id === normalizedId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItem(updatedCartItems);
      return;
    }

    setCartItem([...cartItem, { id: normalizedId, quantity: 1 }]);
  }

  function removeFromCart(productId) {
    const normalizedId = Number(productId);
    setCartItem(cartItem.filter((item) => item.id !== normalizedId));
  }

  function getCartItemWihProducts() {
    return cartItem
      .map((item) => ({ ...item, product: getProductId(item.id) }))
      .filter((item) => item.product);
  }

  function updateQunatity(productId, quantity) {
    const normalizedId = Number(productId);

    if (quantity <= 0) {
      removeFromCart(normalizedId);
      return;
    }

    setCartItem(
      cartItem.map((item) =>
        item.id === normalizedId ? { ...item, quantity } : item,
      ),
    );
  }

  function clearCart() {
    setCartItem([]);
  }

  function getCartTotal() {
    return cartItem.reduce((total, item) => {
      const product = getProductId(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        getCartItemWihProducts,
        removeFromCart,
        updateQunatity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
