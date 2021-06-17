/* eslint-disable react/prop-types */
import React from 'react';
import './CheckoutHeader.scss';

export default function CheckoutHeader(props) {
  const { shoppingBag, shipping, payment } = props;
  return (
    <div>
      <div className="header">
        <div className="header-list__container">
          <ul className="header-list">
            {shoppingBag ? (
              <li className="header-list__item active">1. Shopping Bag</li>
            ) : (
              <li className="header-list__item">1. Shopping Bag</li>
            )}
            {shipping ? (
              <li className="header-list__item active">2. Shipping Details</li>
            ) : (
              <li className="header-list__item">2. Shipping Details</li>
            )}
            {payment ? (
              <li className="header-list__item active">3. Payment Options</li>
            ) : (
              <li className="header-list__item">3. Payment Options</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
