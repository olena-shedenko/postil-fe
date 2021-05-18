/* eslint-disable no-return-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import './Delivery.scss';
import { NavLink } from 'react-router-dom';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import Button from '../../components/Button/Button';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function Delivery() {
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;

  items.map((el) => {
    if (el.inShoppingBag === true) {
      totalPrice += el.currentPrice * el.quantity;
    }
    return el;
  });

  return (
    <div>
      <CheckoutHeader shipping />
      <div className="container">
        <div className="registration">
          <div className="registration-right__block">
            <p className="registration__title">SHIPPING DETAILS</p>
            <RegistrationForm />
            <hr />
            <p>
              <span>/</span> Back
            </p>
          </div>
          <div className="registration-left__block">
            <p className="registration__title">SUMMARY</p>
            <p className="registration-coupone">ENTER COUPONE CODE</p>
            <p className="registration-price">
              <span>SUBTOTAL</span>
              <span>${totalPrice}</span>
            </p>
            <p className="registration-price">
              <span>SHIPPING</span>
              <span>FREE</span>
            </p>
            <p className="registration-price">
              <span>TAXES</span>
              <span>$5</span>
            </p>
            <p className="total-price">
              <span>TOTAL</span>
              <span>${(totalPrice += 5)}</span>
            </p>
            <NavLink to="/delivery">
              <Button
                elementPadding="86px"
                backgroundColor="#373F41"
                textColor="#FFFFFF"
                className="buy__button"
                type="submit"
              >
                Next
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
