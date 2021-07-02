/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWishlist, toggleWishlist } from '../../store/operations';
import './Wishlist.scss';
import Button from '../Button/Button';
import WishlistItems from './WIshlistItems/WishlistItems';

function Wishlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWishlist());
  }, [dispatch]);

  const opened = useSelector((state) => state.openedWishlist);
  const products = useSelector((state) => state.wishlist.data);
  const jwt = sessionStorage.getItem('token');
  let totalPrice = 0;
  let itemCount = 0;

  if (jwt === null) {
    itemCount = 1;
  } else if (jwt !== null) {
    itemCount = 0;
  }

  if (products) {
    products.forEach((i) => {
      totalPrice = i.currentPrice + totalPrice;
      itemCount += 1;
    });
  }

  return (
    <>
      {opened && (
        <div
          className="wishlist-wrap"
          onClick={(e) => {
            if (e.target.className === 'wishlist-wrap') {
              dispatch(toggleWishlist());
            }
          }}
        >
          <div className="wishlist-content">
            <div className="wishlist-header">
              {!!itemCount && (
                <div className="wishlist-header__title">
                  wishlist ({itemCount})
                </div>
              )}
              {!itemCount && (
                <div className="wishlist-header__title">wishlist</div>
              )}
              <button
                type="button"
                onClick={(e) => {
                  if (e.target.className === 'wishlist-header__close__img') {
                    dispatch(toggleWishlist());
                  }
                }}
                className="wishlist-header__close"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/wishlist/close-icon.svg`}
                  alt="close"
                  className="wishlist-header__close__img"
                />
              </button>
            </div>
            {!!itemCount && (
              <>
                <div className="wishlist-price">TOTAL: USD ${totalPrice}</div>
                <div className="wishlist-items">
                  <WishlistItems />
                </div>
              </>
            )}
            {!itemCount && (
              <div className="bagpopup-buttons centered">
                <Link to="/main" onClick={() => dispatch(toggleWishlist())}>
                  <Button className="bagpopup-buttons__item btn" variant="dark">
                    continue shopping
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
