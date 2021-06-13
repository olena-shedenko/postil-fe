import React from 'react';
import PropTypes from 'prop-types';
import './BagPopupItem.scss';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, setCartProducts } from '../../store/operations';
import { SET_ITEMS } from '../../store/types';

function BagPopupItem(props) {
  const { quantity, product, id, products } = props;
  const dispatch = useDispatch();

  const deleteFromCart = (product) => {
    const newArr = products.map((el) => {
      if (el.itemNo === product.itemNo) {
        el.inShoppingBag = !el.inShoppingBag;
      }
      return el;
    });

    dispatch({ type: SET_ITEMS, payload: newArr });
    localStorageToggleBag(product);
  };

  const localStorageToggleBag = () => {
    let cartArr = JSON.parse(localStorage.getItem('bag')) || [];

    if (cartArr.includes(product.itemNo)) {
      const newCartArr = cartArr.filter((el) => el !== product.itemNo);
      cartArr = newCartArr;
    } else {
      cartArr.push(product.itemNo);
    }

    const cart = JSON.stringify(cartArr);
    localStorage.setItem('bag', cart);
  };

  return (
    <div className="bagpopup__item">
      <picture className="bagpopup__item__image_wrap">
        <button
          className="bagpopup__item__image_close_wrap"
          type="button"
          onClick={() => {
            // dispatch(removeProductFromCart(id));
            // dispatch(setCartProducts());
            deleteFromCart(product)
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
  product: PropTypes.objectOf(PropTypes.object),
  id: PropTypes.string,
};
