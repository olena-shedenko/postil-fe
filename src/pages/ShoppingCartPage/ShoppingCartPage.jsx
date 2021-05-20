/* eslint-disable no-underscore-dangle */

import React from 'react';
import './ShoppingCart.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

export default function ShoppingCart() {
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;

  items.map((el) => {
    if (el.inShoppingBag === true) {
      totalPrice += el.currentPrice * el.quantity;
    }
    return el;
  });

  return (
    <>
      <div className="container">
        <div className="bag-header">
          <p className="bag-header__title">SHOPPING BAG</p>
          <p className="bag-header__price">TOTAL USD ${totalPrice}.00</p>
        </div>
        {items.map((el) => {
          if (el.inShoppingBag === true) {
            return <ShoppingBagItem key={el.itemNo} items={items} item={el} />;
          }
          return null;
        })}
        <NavLink to="/checkout_bag">
          <Button className="checkout-btn" variant="dark">
            PROCEED TO CHECKOUT
          </Button>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
