import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';
import MainPage from '../pages/MainPage/MainPage';
import CheckoutBagPage from '../pages/CheckoutBagPage/CheckoutBagPage';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import Catalog from '../pages/Catalog/Catalog';
import ItemPage from '../pages/ItemPage/ItemPage';
// import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route path="/about_us" render={() => <ItemPage />} />
      <Route path="/account" />
      <Route exact path="/main" render={() => <MainPage />} />
      <Route path="/bathroom" />
      <Route path="/bed_linen" />
      <Route path="/bedroom" />
      <Route path="/blog" />
      <Route path="/catalog" render={() => <Catalog />} />
      <Route path="/contact" />
      <Route exact path="/checkout_bag" render={() => <CheckoutBagPage />} />
      <Route exact path="/shopping_cart" render={() => <ShoppingCartPage />} />
      <Route path="/favourites" />
      <Route path="/loungewear" />
      <Route exact path="/delivery" render={() => <DeliveryPage />} />
      <Route exact path="/payment" render={() => <PaymentPage />} />
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
