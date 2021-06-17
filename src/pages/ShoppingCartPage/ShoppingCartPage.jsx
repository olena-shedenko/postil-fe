/* eslint-disable  */

import React from 'react';
import './ShoppingCart.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingBagItem from '../../components/ShoppingBagItem/ShoppingBagItem';
import Button from '../../components/Button/Button';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function ShoppingCart() {
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;
  const bagItems = [];
  const bag = JSON.parse(localStorage.getItem('bag')) || [];
  const jwt = sessionStorage.getItem('token');

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
      const productsInCart = useSelector((state) => state.productsInCart.data);
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
    <div>
      {getLocalCart()}
      <div className="bag__container">
        <Breadcrumbs />
        <div className="bag-header">
          <p className="bag-header__title">SHOPPING BAG</p>
          <p className="bag-header__price">TOTAL USD ${totalPrice}.00</p>
        </div>
        {jwt === null
          ? bagItems.map((el) => {
              return (
                <ShoppingBagItem
                  key={el._id}
                  items={items}
                  item={el}
                  cartQuantity={el.quantityInBag}
                />
              );
            })
          : bagItems.map((el) => {
              return (
                <ShoppingBagItem
                  key={el._id}
                  items={items}
                  item={el.product}
                  cartQuantity={el.cartQuantity}
                />
              );
            })}
        <NavLink to="/checkout_bag">
          <Button className="checkout-btn btn" variant="dark" type="button">
            PROCEED TO CHECKOUT
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
