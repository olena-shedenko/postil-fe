/* eslint-disable no-return-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShippingCheckoutBag from './ShippingCheckoutBag';
import './ShippingCheckout.scss';
import Button from '../Button/Button';

const ShippingCheckout = (props) => {
  const items = useSelector((state) => state.items.data);
  let totalPrice = 0;
  const { to, onClick, buttonName } = props;

  items.map((el) => {
    if (el.inShoppingBag === true) {
      totalPrice += el.currentPrice * el.quantity;
    }
    return el;
  });
  return (
    <div className="delivery-container">
      <p className="title">SUMMARY</p>
      <div className="delivery--product">
        {items.map((el) => {
          if (el.inShoppingBag === true) {
            return <ShippingCheckoutBag key={el.itemNo} item={el} />;
          }
          return null;
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
      <Link to={to}>
        <Button
          onClick={onClick}
          className="delivery--button"
          variant="dark"
          type="submit"
        >
          {buttonName}
        </Button>
      </Link>
    </div>
  );
};

ShippingCheckout.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  buttonName: PropTypes.string,
};

ShippingCheckout.defaultProps = {
  to: '',
  onClick: () => {},
  buttonName: '',
};

export default ShippingCheckout;
