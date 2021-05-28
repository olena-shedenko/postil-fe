/* eslint-disable no-return-assign */
import React from 'react';
import './Delivery.scss';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Delivery() {
  return (
    <div>
      <Navbar />
      <CheckoutHeader shipping />
      <Footer />
    </div>
  );
}

// это страница SHIPPING DETAILS
