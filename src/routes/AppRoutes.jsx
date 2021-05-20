import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  <Switch>
    <Route path="/about_us" />
    <Route path="/account" />
    <Route path="/bathroom" />
    <Route path="/bed_linen" />
    <Route path="/bedroom" />
    <Route path="/blog" />
    <Route
      path="/catalog"
      render={() => 
        <div>404</div>
      }
    />
    <Route path="/contact" />
    <Route path="/shopping_cart" />
    <Route path="/favourites" />
    <Route path="/loungewear" />
    <Route path="/payment_and_delivery" />
    <Route path="/privacy_policy" />
    <Route path="/returns" />
    <Route path="/reviews" />
    <Route path="/sale" />
    <Route path="/terms_of_service" />
  </Switch>;
};

export default AppRoutes;