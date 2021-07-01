import React from 'react';
import PropTypes from 'prop-types';
import './BagPopupItem.scss';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, setCartProducts } from '../../store/operations';

function BagPopupItem(props) {
  const { quantity, product, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="bagpopup__item">
      <picture className="bagpopup__item__image_wrap">
        <button
          className="bagpopup__item__image_close_wrap"
          type="button"
          onClick={() => {
            dispatch(removeProductFromCart(id));
            dispatch(setCartProducts());
          }}
        >
          <img
            className="bagpopup__item__image_close"
            src={`${process.env.PUBLIC_URL}/images/bagPopup/close-icon.svg`}
            alt="close"
          />
        </button>
        <img
          className="bagpopup__item__image"
          src={product.imageUrls[0]}
          alt="item"
        />
        <div className="bagpopup__item__text_wrap">
          <span className="bagpopup__item__text">{product.name}</span>
          <span className="bagpopup__item__text">quantity: {quantity}</span>
          <span className="bagpopup__item__text">size: {product.sizes}</span>
          <span className="bagpopup__item__text">
            usd ${product.currentPrice}
          </span>
        </div>
      </picture>
    </div>
  );
}

export default BagPopupItem;

BagPopupItem.defaultProps = {
  quantity: 0,
  product: {},
  id: null,
};

BagPopupItem.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.instanceOf(Object),
  id: PropTypes.string,
};
