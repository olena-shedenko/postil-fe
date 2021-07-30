/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutBag.scss';
import { NavLink } from 'react-router-dom';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import CheckoutBagItem from '../../components/CheckoutBagItem/CheckoutBagItem';
import Button from '../../components/Button/Button';
import NoItems from '../../components/NoItems/NoItems';

export default function CheckoutBagPage(props) {
  const { history } = props;
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;
  const bagItems = [];
  const bag = JSON.parse(localStorage.getItem('bag')) || [];
  const jwt = sessionStorage.getItem('token');

  const getLocalCart = () => {
    if (jwt === null) {
      items.forEach((el) => {
        bag.forEach((element) => {
          if (element === el._id) {
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
      <CheckoutHeader shoppingBag />
      <div className="registration__container">
        <div className="registration">
          <div className="registration-right__block">
            <p className="registration__title">SHOPPING BAG</p>
            {bagItems.length === 0 ? <NoItems /> : null}
            {jwt === null
              ? bagItems.map((el) => {
                  return (
                    <CheckoutBagItem
                      key={el._id}
                      items={items}
                      item={el}
                      cartQuantity={el.quantityInBag}
                    />
                  );
                })
              : bagItems.map((el) => {
                  return (
                    <CheckoutBagItem
                      key={el._id}
                      items={items}
                      item={el.product}
                      cartQuantity={el.cartQuantity}
                    />
                  );
                })}
            <hr className="decor-line" />
            <p
              className="back__button"
              onClick={() => {
                history.goBack();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  d="M6.87695 11.7964L1.01147 6.40533L6.85379 0.989186"
                  stroke="#373F41"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
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
                className="buy__button btn"
                variant="dark"
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                Buy
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
