/* eslint-disable no-underscore-dangle */
import React from 'react';
import './ShoppingCart.scss';
import { useSelector } from 'react-redux';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';
import Button from '../../components/Button/Button';

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
      <Button
        textColor="#FFFFFF"
        backgroundColor="#373F41"
        className="checkout-btn"
        elementPadding="37px"
      >
        PROCEED TO CHECKOUT
      </Button>
    </div>
  );
}
