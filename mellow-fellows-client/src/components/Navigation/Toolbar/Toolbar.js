import React from 'react';
import history from '../../../history';

import './Toolbar.css';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {

    const onClickHandler = () => {
        history.push('/');
    }

    return (

        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            {/* <div className="Logo">
                <Logo />
            </div> */}
            <div onClick={onClickHandler} className="home">
                Mellow Fellows
            </div>
            <nav className="DesktopOnly">
                <NavigationItems isAuthenticated={props.isAuth} />
            </nav>
        </header>
    );


}

export default Toolbar;