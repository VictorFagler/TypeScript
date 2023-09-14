import React, { useContext, useEffect, useState } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shopcontext';
import { CartItem } from './cartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

 // useState to manage the cartItems state
  const [cartItemsState, setCartItems] = useState<{ [key: number]: number }>(cartItems); // Initialize with cartItems
 
  // Load cart data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
    }
  }, []);

  // Save cart data to localStorage whenever cartItemsState changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItemsState));
  }, [cartItemsState]);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            const itemQuantity = cartItems[product.id];
            if (itemQuantity > 0) {
              return <CartItem data={product} key={product.id} />;
            }
            return null;
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <>
            <h3>Your Cart is Empty</h3>
            <button className="backToShop" onClick={() => navigate('/')}>Back to shop</button>
          </>
        )}
      </div>
    </div>
  );
};
