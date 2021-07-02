/* eslint-disable */
import React, { useEffect } from 'react';
import './CheckoutBagItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ITEMS, SET_QUANTITY, SET_CART_AFTER_DELETE } from '../../store/types';
import {
  addToCart,
  removeOneFromCart,
  setCartProducts,
} from '../../store/operations';

export default function CheckoutBagItem(props) {
  const dispatch = useDispatch();
  const jwt = sessionStorage.getItem('token');

  useEffect(() => {
    dispatch(setCartProducts());
  }, [dispatch]);

  const { items, item, cartQuantity } = props;
  const productsInCart = useSelector((state) => state.productsInCart.data);
  const {
    item: { imageUrls, name, currentPrice, _id },
  } = props;

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
      const newCartArr = productsInCart.filter(
        (el) => el.product.itemNo !== item
      );
      dispatch({ type: SET_CART_AFTER_DELETE, payload: newCartArr });
    }
  };

  const addItem = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el.itemNo === item.itemNo) {
          el.quantityInBag += 1;
        }
        return el;
      });

      dispatch({ type: SET_ITEMS, payload: newArr });
    } else if (jwt !== null) {
      const newArr = productsInCart.map((el) => {
        if (el.product.itemNo === item) {
          el.cartQuantity += 1;
        }
        return el;
      });
      dispatch({ type: SET_QUANTITY, payload: newArr });
    }
  };

  const localStorageToggleBag = () => {
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

  const removeItem = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el.itemNo === item.itemNo) {
          el.quantityInBag -= 1;
          if (el.quantityInBag === 0) {
            el.inShoppingBag = !el.inShoppingBag;
            localStorageToggleBag(item);
          }
        }
        return el;
      });

      dispatch({ type: SET_ITEMS, payload: newArr });
    } else if (jwt !== null) {
      const newArr = productsInCart.map((el) => {
        if (el.product.itemNo === item) {
          el.cartQuantity -= 1;
        }
        return el;
      });

      dispatch({ type: SET_QUANTITY, payload: newArr });

      productsInCart.map((el) => {
        if (el.cartQuantity === 0) {
          deleteFromCart(item);
        }
      });
    }
  };

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
            <p className="text-content__discribe discribe">
              This is the luxury bedding set with absolutely everything in it,
              at a price that won't keep you up at night.
            </p>
            <p className="text-content__price">${currentPrice}</p>
            <div className="ddd">
              <div className="quantity__block quantity__block2">
                <p className="quantity">{cartQuantity}</p>
                <div className="add-quantity">
                  {jwt === null ? (
                    <p className="quantity-add" onClick={() => addItem(item)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98533 4.85909L3.97697 2.81704C4.16042 2.62915 4.45725 2.62915 4.6407 2.81704L6.63234 4.85909C6.81578 5.04697 7.11308 5.04697 7.29652 4.85909L7.62839 4.5189C7.81137 4.33102 7.81137 4.02595 7.62839 3.83806L4.97256 1.11517C4.60613 0.739403 4.01154 0.739403 3.64511 1.11517L0.989285 3.83806C0.8063 4.02595 0.8063 4.33102 0.989285 4.5189L1.32115 4.85909C1.50459 5.04697 1.80189 5.04697 1.98533 4.85909Z"
                          fill="#373F41"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      className="quantity-add"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            productId: _id,
                          })
                        );
                        addItem(item.itemNo);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98533 4.85909L3.97697 2.81704C4.16042 2.62915 4.45725 2.62915 4.6407 2.81704L6.63234 4.85909C6.81578 5.04697 7.11308 5.04697 7.29652 4.85909L7.62839 4.5189C7.81137 4.33102 7.81137 4.02595 7.62839 3.83806L4.97256 1.11517C4.60613 0.739403 4.01154 0.739403 3.64511 1.11517L0.989285 3.83806C0.8063 4.02595 0.8063 4.33102 0.989285 4.5189L1.32115 4.85909C1.50459 5.04697 1.80189 5.04697 1.98533 4.85909Z"
                          fill="#373F41"
                        />
                      </svg>
                    </p>
                  )}
                  {jwt === null ? (
                    <p
                      className="quantity-add"
                      onClick={() => removeItem(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98533 0.973921L3.97697 3.01597C4.16042 3.20385 4.45725 3.20385 4.6407 3.01597L6.63234 0.973921C6.81578 0.786037 7.11308 0.786037 7.29652 0.973921L7.62839 1.3141C7.81137 1.50199 7.81137 1.80706 7.62839 1.99495L4.97256 4.71784C4.60613 5.09361 4.01154 5.09361 3.64511 4.71784L0.989285 1.99495C0.8063 1.80706 0.8063 1.50199 0.989285 1.3141L1.32115 0.973921C1.50459 0.786037 1.80189 0.786037 1.98533 0.973921Z"
                          fill="#373F41"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p
                      className="quantity-add"
                      onClick={() => {
                        dispatch(
                          removeOneFromCart({
                            productId: _id,
                          })
                        );
                        removeItem(item.itemNo);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.98533 0.973921L3.97697 3.01597C4.16042 3.20385 4.45725 3.20385 4.6407 3.01597L6.63234 0.973921C6.81578 0.786037 7.11308 0.786037 7.29652 0.973921L7.62839 1.3141C7.81137 1.50199 7.81137 1.80706 7.62839 1.99495L4.97256 4.71784C4.60613 5.09361 4.01154 5.09361 3.64511 4.71784L0.989285 1.99495C0.8063 1.80706 0.8063 1.50199 0.989285 1.3141L1.32115 0.973921C1.50459 0.786037 1.80189 0.786037 1.98533 0.973921Z"
                          fill="#373F41"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
