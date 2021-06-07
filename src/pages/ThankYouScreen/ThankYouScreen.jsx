import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ThankYouScreen.scss';

const ThankYouScreen = () => {
  return (
    <div>
      <div className="thanks__container">
        <p className="thanks__title">THANK YOU FOR YOUR ORDER!</p>
        <NavLink to="/main">
          <Button className="btn continue__btn" variant="dark">
            CONTINUE SHOPPING
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ThankYouScreen;
