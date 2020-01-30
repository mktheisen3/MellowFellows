import React, { useState, useContext } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { Context as AuthContext } from '../../context/AuthContext';

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const { state } = useContext(AuthContext);

    const sideDrawerClosedHandler = () => {        
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (

        <Aux>
            <Toolbar
                isAuth={state.token}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={state.token}
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )

}

export default Layout;