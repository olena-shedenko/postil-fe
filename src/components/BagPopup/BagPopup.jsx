import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import BagPopupItems from '../BagPopupItems/BagPopupItems';
import { toggleBagPopup, setCartProducts } from '../../store/operations';
import './BagPopup.scss';

export default function BagPopup() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartProducts());
  }, [dispatch]);

  const opened = useSelector((state) => state.openedBagPopup);
  const products = useSelector((state) => state.productsInCart.data);
  let totalPrice = 0;
  let itemCount = 0;
  products.forEach((i) => {
    totalPrice = i.cartQuantity * i.product.currentPrice + totalPrice;
    itemCount = i.cartQuantity + itemCount;
    console.log(totalPrice);
  });

  return (
    <>
      {opened && (
        /* eslint-disable-next-line */
        <div onClick={(e) => {
            if (e.target.className === 'bagpopup-wrap') {
              dispatch(toggleBagPopup());
            }
          }}
          className="bagpopup-wrap"
        >
          <div className="bagpopup-content">
            <div className="bagpopup-header">
              <div className="bagpopup-header__title">BAG ({itemCount})</div>
              <button
                type="button"
                onClick={(e) => {
                  if (e.target.className === 'bagpopup-header__close__img') {
                    dispatch(toggleBagPopup());
                  }
                }}
                className="bagpopup-header__close"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/close-icon.svg`}
                  alt="close"
                  className="bagpopup-header__close__img"
                />
              </button>
            </div>
            <div className="bagpopup-price">TOTAL: USD ${totalPrice}</div>
            <div className="bagpopup-buttons">
              <Button
                className="bagpopup-buttons__item"
                variant="light-bordered"
                onClick={() => {
                  // eslint-disable-next-line
                  location.href = '/shopping_cart';
                }}
              >
                <Link
                  onClick={() => dispatch(toggleBagPopup())}
                  to="shopping_cart"
                >
                  VIEW BAG
                </Link>
              </Button>
              <Button className="bagpopup-buttons__item" variant="dark">
                CHECKOUT
              </Button>
            </div>
            <div className="bagpopup-items">
              <BagPopupItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
