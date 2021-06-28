import React from 'react';
import ShippingDetailsForms from './shippingBlock/ShippingDetailsForms';
import ShippingCheckout from '../BagSummary/ShippingCheckout';

const ShippingDetails = () => {
  return (
    <div className="container">
      <div className="container--block">
        <ShippingDetailsForms />
        <ShippingCheckout />
      </div>
    </div>
  );
};

export default ShippingDetails;
