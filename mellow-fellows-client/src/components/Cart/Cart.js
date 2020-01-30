import React from 'react';

import shoppingCart from '../../assets/icons/shopping-cart.png';
import './Cart.css';

const cart = () => (
    <div className="Cart" style={{height: "80%"}}>
        <img src={shoppingCart} alt="ShoppingCart" />
    </div>
);

export default cart;