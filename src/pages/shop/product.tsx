import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import './shop.css';

interface ProductProps {
  data: {
    id: number;
    productName: string;
    price: number;
    productImg: string;
  };
}

export const Product: React.FC<ProductProps> = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
      <Link to={`/productdetails/${id}`}>
        <img src={productImg} alt={productName} />
        <h4>{productName}</h4>
      </Link>
      <p>$ {price}</p>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount && `(${cartItemAmount})`}
      </button>
      <div className='heartIconContainer'>
        <AiFillHeart className='heartIcon' />
      </div>
    </div>
  );
};