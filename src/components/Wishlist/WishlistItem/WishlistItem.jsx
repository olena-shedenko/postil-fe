import React from 'react';
import PropTypes from 'prop-types';
import './WishlistItem.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  removeProductFromWishlist,
  setWishlist,
  addToCart,
  toggleWishlist,
} from '../../../store/operations';
import Button from '../../Button/Button';

function WishlistItem({ product, id, items }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="wishlist__item">
      <div className="wishlist__item-overlay">
        <Button
          variant="dark"
          onClick={() => {
            dispatch(
              addToCart({
                productId: id,
                onSuccess: () => {
                  history.push('/shopping_cart');
                  dispatch(toggleWishlist());
                },
                productNo: product.itemNo,
                item: items,
              })
            );
          }}
        >
          add to cart
        </Button>
      </div>
      <picture className="wishlist__item__image_wrap">
        <button
          className="wishlist__item__image_close_wrap"
          type="button"
          onClick={() => {
            dispatch(removeProductFromWishlist(id));
            dispatch(setWishlist());
          }}
        >
          <img
            className="wishlist__item__image_close"
            src={`${process.env.PUBLIC_URL}/images/wishlist/close-icon.svg`}
            alt="close"
          />
        </button>
        <img
          className="wishlist__item__image"
          src={product.imageUrls[0]}
          alt="item"
        />
        <div className="wishlist__item__text_wrap">
          <span className="wishlist__item__text">{product.name}</span>
          <span className="wishlist__item__text">size: {product.sizes}</span>
          <span className="wishlist__item__text">
            usd ${product.currentPrice}
          </span>
        </div>
      </picture>
    </div>
  );
}

export default WishlistItem;

WishlistItem.defaultProps = {
  product: {},
  id: null,
  items: [],
};

WishlistItem.propTypes = {
  product: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  items: PropTypes.instanceOf(Array),
};
