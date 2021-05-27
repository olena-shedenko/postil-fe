/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutBag.scss';
import { NavLink } from 'react-router-dom';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import CheckoutBagItem from '../../components/CheckoutBagItem/CheckoutBagItem';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function CheckoutBag() {
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
      <Navbar />
      <CheckoutHeader shoppingBag />
      <div className="container">
        <div className="registration">
          <div className="registration-right__block">
            <p className="registration__title">SHOPPING BAG</p>
            {items.map((el) => {
              if (el.inShoppingBag === true) {
                return (
                  <CheckoutBagItem key={el.itemNo} items={items} item={el} />
                );
              }
              return null;
            })}
            <hr />
            <p><span>/</span> Back</p>
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
                className="buy__button"
                variant='dark'
                type="button"
              >
                Buy
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
