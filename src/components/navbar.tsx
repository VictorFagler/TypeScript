import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import { ShopContext } from '../context/shopcontext';

export const Navbar: React.FC = () => {
  const { cartItems } = useContext(ShopContext);

  // Provide a type annotation for cartItems if it's not already typed
  const totalCartItemCount: number = Object.values<number>(cartItems).reduce(
    (total, itemCount) => total + itemCount, 0);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart" style={{ position: 'relative', marginRight: '30px' }}>
          <>
            Cart <ShoppingCart size={24} className="cartIcon" style={{ position: 'absolute', marginTop: '7px', right: '-30px' }} />
            <span style={{ fontSize: '14px', position: 'absolute', top: '-2px', right: '-45px' }}>
              ({totalCartItemCount})
            </span>
          </>
        </Link>
      </div>
    </div>
  );
};
