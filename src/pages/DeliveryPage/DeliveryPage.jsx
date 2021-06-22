import React from 'react';
import './Delivery.scss';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import ShippingDetails from '../../components/ShippingDetails/ShippingDetails';

export default function Delivery() {
  return (
    <div>
      <CheckoutHeader shipping />
      <ShippingDetails />
    </div>
  );
}
