import React from 'react';
import './Delivery.scss';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ShippingDetails from '../../components/ShippingDetails/ShippingDetails';

export default function Delivery() {
  return (
    <div>
      <Navbar />
      <CheckoutHeader shipping />
      <ShippingDetails />
      <Footer />
    </div>
  );
}
