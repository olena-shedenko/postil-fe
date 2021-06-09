/* eslint-disable */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage';
import MainPage from '../pages/MainPage/MainPage';
import CheckoutBagPage from '../pages/CheckoutBagPage/CheckoutBagPage';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import Catalog from '../pages/Catalog/Catalog';
import ContactUs from '../pages/ContactUs/ContactUs';
import TermsAndServices from '../pages/TermsAndServices/TermsAndServices';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import ThankYouScreen from '../pages/ThankYouScreen/ThankYouScreen';
import Returns from '../pages/Returns/Returns';
import PaymentDelivery from '../pages/PaymentDelivery/PaymentDelivery';
// import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route path="/about_us" />
      <Route path="/account" />
      <Route exact path="/main" render={() => <MainPage />} />
      <Route path="/bathroom" />
      <Route path="/bed_linen" />
      <Route path="/bedroom" />
      <Route path="/blog" />
      <Route path="/catalog" render={() => <Catalog />} />
      <Route path="/contact-us" render={() => <ContactUs />} />
      <Route
        exact
        path="/checkout_bag"
        render={(routerProps) => <CheckoutBagPage {...routerProps} />}
      />
      <Route exact path="/thank_you_screen" render={() => <ThankYouScreen />} />
      <Route exact path="/shopping_cart" render={() => <ShoppingCartPage />} />
      <Route path="/favourites" />
      <Route path="/loungewear" />
      <Route exact path="/delivery" render={() => <DeliveryPage />} />
      <Route
        exact
        path="/payment"
        render={(routerProps) => <PaymentPage {...routerProps} />}
      />
      <Route path="/payment_and_delivery" render={() => <PaymentDelivery />} />
      <Route path="/privacy_policy" render={() => <PrivacyPolicy />} />
      <Route path="/returns" render={() => <Returns />} />
      <Route path="/reviews" />
      <Route path="/sale" />
      <Route path="/terms_of_service" render={() => <TermsAndServices />} />
      <Route path="*" render={() => <div>404</div>} />
    </Switch>
  );
};

export default AppRoutes;
