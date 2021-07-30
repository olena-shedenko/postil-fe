/* eslint-disable */
import React, { useEffect } from 'react';
import './ShoppingBagItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_ITEMS,
  SET_QUANTITY,
  SET_CART_AFTER_DELETE,
} from '../../store/types';
import Icon from '../Icon/Icon';
import { catalogItemsSelector } from '../../store/selectors';
import {
  addToCart,
  removeFromCart,
  setCartProducts,
  removeOneFromCart,
  removeProductFromWishlist,
  addToWishlist,
} from '../../store/operations';

export default function ShoppingBagItem(props) {
  const dispatch = useDispatch();
  const jwt = sessionStorage.getItem('token');
  const wish = useSelector(catalogItemsSelector) || [];

  useEffect(() => {
    dispatch(setCartProducts());
  }, [dispatch]);

  const { item, items, cartQuantity } = props;
  const productsInCart =
    useSelector((state) => state.productsInCart.data) || [];
  const {
    item: { color, imageUrls, name, currentPrice, sizes, _id },
  } = props;
  const colors = color.split('/');
  const size = sizes.split(', ');

  const deleteFromCart = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el._id === item._id) {
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

  const localStorageToggleBag = () => {
    let cartArr = JSON.parse(localStorage.getItem('bag')) || [];

    if (cartArr.includes(item._id)) {
      const newCartArr = cartArr.filter((el) => el !== item._id);
      cartArr = newCartArr;
    } else {
      cartArr.push(item._id);
    }

    const cart = JSON.stringify(cartArr);
    localStorage.setItem('bag', cart);
  };

  const addItem = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el._id === item._id) {
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

  const removeItem = (item) => {
    if (jwt === null) {
      const newArr = items.map((el) => {
        if (el._id === item._id) {
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
            <p className="text-content__discribe">
              This is the luxury bedding set with absolutely everything in it,
              at a price that won't keep you up at night.
            </p>
            <p className="text-content__price">${currentPrice}</p>
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

        <div className="functional-content">
          {jwt === null ? (
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
          ) : (
            <p
              onClick={() => {
                dispatch(
                  removeFromCart({
                    productId: _id,
                  })
                );
                deleteFromCart(item.itemNo);
              }}
              className="cross"
            >
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
          )}
          <p className="favorites">
            Add to favorites
            {jwt === null && (
              <Icon
                color="#000"
                title="Add to Wishlist"
                onClick={() => {
                  dispatch(addToWishlist(item._id));
                }}
              />
            )}
            {jwt !== null &&
              wish.map((el) => {
                if (el._id === item._id) {
                  return el.inWishList ? (
                    <Icon
                      color="#000"
                      title="Remove from Wishlist"
                      inWishList
                      onClick={(event) => {
                        event.preventDefault();
                        if (el.inWishList) {
                          dispatch(removeProductFromWishlist(item._id));
                        } else {
                          dispatch(addToWishlist(item._id));
                        }
                      }}
                    />
                  ) : (
                    <Icon
                      color="#000"
                      title="Add to Wishlist"
                      onClick={(event) => {
                        event.preventDefault();
                        if (el.inWishList) {
                          dispatch(removeProductFromWishlist(item._id));
                        } else {
                          dispatch(addToWishlist(item._id));
                        }
                      }}
                    />
                  );
                }
              })}
          </p>
        </div>
      </div>
      <hr className="decor_line" />
    </>
  );
}
