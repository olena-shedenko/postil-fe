/* eslint-disable no-underscore-dangle */

import React from 'react';
import './ShoppingCart.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export default function ShoppingCart() {
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;
  const bagItems = [];
  const bag = JSON.parse(localStorage.getItem('bag')) || [];

  items.map((el) => {
    if (el.inShoppingBag === true) {
      totalPrice += el.currentPrice * el.quantityInBag;
    }
    return el;
  });

  const getLocalCart = () => {
    items.forEach((el) => {
      bag.forEach((element) => {
        if (element === el.itemNo) {
          bagItems.push(el);
        }
      });
    });
  };

  return (
    <div>
      {getLocalCart()}
      <div className="bag__container">
        <div className="bag-header">
          <p className="bag-header__title">SHOPPING BAG</p>
          <p className="bag-header__price">TOTAL USD ${totalPrice}.00</p>
        </div>
        {bagItems.map((el) => {
          return <ShoppingBagItem key={el.itemNo} items={items} item={el} />;
        })}
        <NavLink to="/checkout_bag">
          <Button className="checkout-btn" variant="dark" type="button">
            PROCEED TO CHECKOUT
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
