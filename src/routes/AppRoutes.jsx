import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/about_us" />
      <Route path="/account" />
      <Route path="/bathroom" />
      <Route path="/bed_linen" />
      <Route path="/bedroom" />
      <Route path="/blog" />
      <Route path="/catalog" />
      <Route path="/contact" />
      <Route exact path="/shopping_cart" render={() => <ShoppingCart />} />
      <Route path="/favourites" />
      <Route path="/loungewear" />
      <Route path="/payment_and_delivery" />
      <Route path="/privacy_policy" />
      <Route path="/returns" />
      <Route path="/reviews" />
      <Route path="/sale" />
      <Route path="/terms_of_service" />
      <Route path="*" render={() => <div>404</div>} />
    </Switch>
  );
};

export default AppRoutes;
