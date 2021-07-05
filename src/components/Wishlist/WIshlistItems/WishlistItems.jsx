import React from 'react';
import { useSelector } from 'react-redux';
import WishlistItem from '../WishlistItem/WishlistItem';

function WishlistItems() {
  const products = useSelector((state) => state.wishlist.data);
  const items = useSelector((state) => state.items.data);
  const jwt = sessionStorage.getItem('token');
  const product = [];

  const getItems = () => {
    if (jwt === null) {
      items.map((el) => {
        if (el.inShoppingBag === true) {
          product.push(el);
        }
        return el;
      });
    } else if (jwt !== null) {
      products.map((el) => {
        product.push(el);
        return el;
      });
    }
  };

  return (
    <>
      {getItems()}
      {jwt !== null && product
        ? product.map((el) => {
            return (
              <WishlistItem
                key={el.itemNo}
                product={el}
                items={items}
                // eslint-disable-next-line
                            id={el._id}
              />
            );
          })
        : product.map((el) => {
            return (
              <WishlistItem
                key={el.itemNo}
                product={el}
                items={items}
                // eslint-disable-next-line
                            id={el._id}
              />
            );
          })}
    </>
  );
}

export default WishlistItems;
