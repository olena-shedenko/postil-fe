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

  if (products) {
    products.forEach((i) => {
      totalPrice = i.cartQuantity * i.product.currentPrice + totalPrice;
      itemCount = i.cartQuantity + itemCount;
    });
  }

  return (
    <>
      {opened && (
        <>
          {/* eslint-disable-next-line */}
          <div
            onClick={(e) => {
              if (e.target.className === 'bagpopup-wrap') {
                dispatch(toggleBagPopup());
              }
            }}
            className="bagpopup-wrap"
          >
            <div className="bagpopup-content">
              <div className="bagpopup-header">
                {!!itemCount && (
                  <div className="bagpopup-header__title">
                    BAG ({itemCount})
                  </div>
                )}
                {!itemCount && (
                  <div className="bagpopup-header__title">BAG</div>
                )}
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
                    src={`${process.env.PUBLIC_URL}/images/bagPopup/close-icon.svg`}
                    alt="close"
                    className="bagpopup-header__close__img"
                  />
                </button>
              </div>
              {!!itemCount && (
                <>
                  <div className="bagpopup-price">TOTAL: USD ${totalPrice}</div>
                  <div className="bagpopup-buttons">
                    <Link
                      onClick={() => dispatch(toggleBagPopup())}
                      to="shopping_cart"
                    >
                      <Button
                        className="bagpopup-buttons__item"
                        variant="light-bordered"
                      >
                        VIEW BAG
                      </Button>
                    </Link>
                    <Link
                      onClick={() => dispatch(toggleBagPopup())}
                      to="/checkout_bag"
                    >
                      <Button className="bagpopup-buttons__item" variant="dark">
                        CHECKOUT
                      </Button>
                    </Link>
                  </div>
                  <div className="bagpopup-items">
                    <BagPopupItems />
                  </div>
                </>
              )}
              {!itemCount && (
                <div className="bagpopup-buttons centered">
                  <Link to="/main" onClick={() => dispatch(toggleBagPopup())}>
                    <Button className="bagpopup-buttons__item" variant="dark">
                      continue shopping
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
