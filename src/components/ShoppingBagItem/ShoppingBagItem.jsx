/* eslint-disable */
import React from 'react';
import './ShoppingBagItem.scss';
import { useDispatch } from 'react-redux';
import { SET_ITEMS } from '../../store/items/types';
import Icon from '../Icon/Icon';

export default function ShoppingBagItem(props) {
  const { item, items } = props;
  const {
    item: {
      color,
      itemNo,
      imageUrls,
      name,
      currentPrice,
      isFavourite,
      sizes,
      quantity,
    },
  } = props;

  const dispatch = useDispatch();
  const colors = color.split('/');
  const size = sizes.split(', ');

  const deleteFromCart = (item) => {
    const newArr = items.map((el) => {
      if (el.itemNo === item.itemNo) {
        el.inShoppingBag = !el.inShoppingBag;
      }
      return el;
    });

    dispatch({ type: SET_ITEMS, payload: newArr });
  };

  const toggleLiked = (item) => {
    const newArr = items.map((el) => {
      if (el.itemNo === item.itemNo) {
        el.isFavourite = !el.isFavourite;
      }
      return el;
    });

    dispatch({ type: SET_ITEMS, payload: newArr });
  };

  const addItem = (item) => {
    const newArr = items.map((el) => {
      if (el.itemNo === item.itemNo) {
        el.quantity += 1;
      }
      return el;
    });

    dispatch({ type: SET_ITEMS, payload: newArr });
  }

  const removeItem = (item) => {
    const newArr = items.map((el) => {
      if (el.itemNo === item.itemNo) {
        el.quantity -= 1;
        if(el.quantity === 0){
          el.inShoppingBag = !el.inShoppingBag;
        }
      }
      return el;
    });

    dispatch({ type: SET_ITEMS, payload: newArr });
  }

  return (
    <>
      <div className="bag-item">
        <div className="item-text-content">
          <img
            src={imageUrls[0]}
            alt="image"
            className="item__img"
            width="200px"
            height="200px"
          />
          <div className="text-content">
            <p className="text-content__title">{name}</p>
            <p className="text-content__discribe">
              This is the luxury bedding set with absolutely everything in it,
              at a price that won't keep you up at night.
            </p>
            <p className="text-content__price">${currentPrice * item.quantity}</p>
            <div className="ddd">
              <div className="optiops">
                <p>
                  Color:
                  <select className="optiop__color">
                    {colors.map((el) => {
                      return <option key={el}>{el}</option>;
                    })}
                  </select>
                </p>
                <p>
                  Size:
                  <select className="optiop__size">
                    {size.map((el) => {
                      return <option key={el}>{el}</option>;
                    })}
                  </select>
                </p>
              </div>
              <div className="quantity__block">
                <p className="quantity">{quantity}</p>
                <div className="add-quantity">
                  <p className="quantity-add" onClick={() => addItem(item)}>+</p>
                  <p className="quantity-add" onClick={() => removeItem(item)}>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="functional-content">
          <p onClick={() => deleteFromCart(item)} className="cross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.04338 10.0033L0.190707 18.9181C-0.0552355 19.1658 -0.0552355 19.567 0.190707 19.8147C0.313522 19.9387 0.474775 20.0004 0.635716 20.0004C0.796969 20.0004 0.957909 19.9387 1.08072 19.8147L9.99996 10.8328L18.9192 19.8147C19.0423 19.9387 19.2033 20.0004 19.3642 20.0004C19.5251 20.0004 19.6864 19.9387 19.8092 19.8147C20.0552 19.567 20.0552 19.1658 19.8092 18.9181L10.9569 10.0033L19.8152 1.0821C20.0611 0.834431 20.0611 0.433187 19.8152 0.185517C19.5692 -0.0618389 19.1708 -0.0618389 18.9251 0.185517L10.0003 9.17371L1.07447 0.185831C0.828532 -0.0615242 0.430399 -0.0615242 0.184457 0.185831C-0.0614856 0.433501 -0.0614856 0.834746 0.184457 1.08242L9.04338 10.0033Z"
                fill="#373F41"
              />
            </svg>
          </p>
          <p className="favourites">
            Add to favourits
            <Icon
              onClick={() => toggleLiked(item)}
              filled={isFavourite ? '#373F41' : 'none'}
            />
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
