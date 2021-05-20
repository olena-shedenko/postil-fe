import React from 'react';
import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import "./PaymentPage.scss"

export default function PaymentPage() {
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
      <CheckoutHeader />
      <div className="container">
        <div className="registration">
          <div className="registration-right__block">
            <p className="registration__title">PAYMENT METHOD</p>
            <hr />
            <p>
              <span>/</span> Back
            </p>
          </div>
          <div className="registration-left__block">
            <p className="registration__title">SUMMARY</p>
            {items.map((el) => {
              if (el.inShoppingBag === true) {
                return (
                  <div className="card">
                    <img
                      src={el.imageUrls[0]}
                      alt="image"
                      width="100px"
                      height="100px"
                    />
                    <div className="card-text-content">
                      <p className="card-text-content__title">{el.name}</p>
                      <p className="card-text-content__price">${el.currentPrice}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
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
            {/* <NavLink to="/delivery">
              <Button
                className="buy__button"
                variant='dark'
              >
                Buy
              </Button>
            </NavLink> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
