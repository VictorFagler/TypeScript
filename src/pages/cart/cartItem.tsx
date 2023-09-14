import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';

interface CartItemProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImg: string;
  };
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImg} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
