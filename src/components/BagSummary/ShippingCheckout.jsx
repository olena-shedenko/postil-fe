/* eslint-disable no-return-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import ShippingCheckoutBag from './ShippingCheckoutBag';
import './ShippingCheckout.scss';
import Button from '../Button/Button';

const ShippingCheckout = () => {
  const items = useSelector((state) => state.items.data);
  const productsInCart =
    useSelector((state) => state.productsInCart.data) || [];
  let totalPrice = 0;
  const bagItems = [];
  const jwt = sessionStorage.getItem('token');
  const bag = JSON.parse(localStorage.getItem('bag')) || [];

  const getLocalCart = () => {
    if (jwt === null) {
      items.forEach((el) => {
        bag.forEach((element) => {
          if (element === el.itemNo) {
            bagItems.push(el);
          }
        });
      });
      items.map((el) => {
        if (el.inShoppingBag === true) {
          totalPrice += el.currentPrice * el.quantityInBag;
        }
        return el;
      });
    } else if (jwt !== null) {
      productsInCart.forEach((el) => {
        bagItems.push(el);
      });
      bagItems.map((el) => {
        totalPrice += el.product.currentPrice * el.cartQuantity;
        return el;
      });
    }
  };
  return (
    <div className="delivery-container">
      {getLocalCart()}
      <p className="title">SUMMARY</p>
      <div className="delivery--product">
        {jwt === null
          ? bagItems.map((el) => {
              return <ShippingCheckoutBag key={el.itemNo} item={el} />;
            })
          : bagItems.map((el) => {
              return (
                <ShippingCheckoutBag
                  key={el.product.itemNo}
                  item={el.product}
                />
              );
            })}
      </div>
      <p className="delivery--coupone">ENTER COUPONE CODE</p>
      <p className="delivery--summary">
        <span>SUBTOTAL</span>
        <span>${totalPrice}</span>
      </p>
      <p className="delivery--summary">
        <span>SHIPPING</span>
        <span>FREE</span>
      </p>
      <p className="delivery--summary">
        <span>TAXES</span>
        <span>$5</span>
      </p>
      <p className="delivery--summary__total">
        <span>TOTAL</span>
        <span>${(totalPrice += 5)}</span>
      </p>

      <Button className="delivery--button btn" variant="dark" type="submit">
        NEXT
      </Button>
    </div>
  );
};

export default ShippingCheckout;
