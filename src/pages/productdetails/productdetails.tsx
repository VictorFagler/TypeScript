import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';
import './productdetails.css';

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const thisProduct = PRODUCTS.find((product) => product.id === Number(id));
  const navigate = useNavigate();

  if (!thisProduct) {
    console.error(`Product not found for productId: ${id}`);
    return <div>Product not found</div>;
  }

  return (
    <div className='productdetails'>
      <h1>{thisProduct.productName}</h1>
      <img src={thisProduct.productImg} alt={thisProduct.productName} />
      <p className='description'>{thisProduct.description}</p>
      <p className='price'>Price: ${thisProduct.price}</p>
      <button className='addToCartBtn' onClick={() => addToCart(parseInt(id))}>
        Add to Cart {cartItemAmount && `(${cartItemAmount})`}
      </button>
      <br></br>
      <button className='backToShop' onClick={() => navigate('/')}>
        Back to shop
      </button>
    </div>
  );
};