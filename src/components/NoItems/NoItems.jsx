import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import "./NoItems.scss"

export default function NoItems() {
  return (
    <div>
      <h2 className="no-items">there are no items in the cart</h2> 
      <NavLink to="/catalog">
        <Button
          className="checkout-btn btn"
          variant="dark"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          CONTINUE SHOPPING
        </Button>
      </NavLink>
    </div>
  );
}
