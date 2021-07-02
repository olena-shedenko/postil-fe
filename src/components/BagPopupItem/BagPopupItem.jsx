import React from 'react';
import PropTypes from 'prop-types';
import './BagPopupItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, setCartProducts } from '../../store/operations';
import { SET_ITEMS } from '../../store/types';

function BagPopupItem(props) {
  const { quantity, product, id } = props;
  const dispatch = useDispatch();
  const jwt = sessionStorage.getItem('token');
  const items = useSelector((state) => state.items.data) || [];

  const localStorageToggleBag = (item) => {
    let cartArr = JSON.parse(localStorage.getItem('bag')) || [];

    if (cartArr.includes(item.itemNo)) {
      const newCartArr = cartArr.filter((el) => el !== item.itemNo);
      cartArr = newCartArr;
    } else {
      cartArr.push(item.itemNo);
    }

    const cart = JSON.stringify(cartArr);
    localStorage.setItem('bag', cart);
  };

  const deleteFromCart = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el.itemNo === item.itemNo) {
          el.inShoppingBag = !el.inShoppingBag;
          el.quantityInBag = 0;
        }
        return el;
      });

      dispatch({ type: SET_ITEMS, payload: newArr });
      localStorageToggleBag(item);
    } else if (jwt !== null) {
      dispatch(removeProductFromCart(id));
      dispatch(setCartProducts());
    }
  };

  return (
    <div className="bagpopup__item">
      <picture className="bagpopup__item__image_wrap">
        <button
          className="bagpopup__item__image_close_wrap"
          type="button"
          onClick={() => {
            deleteFromCart(product);
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
  product: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string,
};
