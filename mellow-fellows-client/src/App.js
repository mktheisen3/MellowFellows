import React, { useEffect, useContext } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Products from './components/Products/Products';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import Orders from './components/Orders/Orders';
import ProductInfo from './components/ProductInfo/ProductInfo';

import { Context as AuthContext } from './context/AuthContext';

function App() {

  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  let routes = (
    <Switch>
      <Route path="/signin" render={(props) => <Signin {...props} />} />
      <Route path="/signup" render={(props) => <Signup {...props} />} />
      <Route path="/logout" render={(props) => <Logout {...props} />} />
      <Route path="/orders" render={(props) => <Orders {...props} />} />
      <Route path="/info" render={(props) => <ProductInfo {...props} />} />
      <Route path="/" exact component={Products} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
