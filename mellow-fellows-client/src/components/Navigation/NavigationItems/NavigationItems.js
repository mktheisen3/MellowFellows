import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
import Cart from '../../Cart/Cart';

const navigationItems = ( props ) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Products</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/signin">Login</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
        {props.isAuthenticated ? <NavigationItem link="/checkout"><Cart /></NavigationItem> : null}
    </ul>
);

export default navigationItems;