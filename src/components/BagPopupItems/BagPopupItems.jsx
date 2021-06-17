import React from 'react';
import { useSelector } from 'react-redux';
import BagPopupItem from '../BagPopupItem/BagPopupItem';

function BagPopupItems() {
  const products = useSelector((state) => state.productsInCart.data);
  const items = useSelector((state) => state.items.data);
  const jwt = sessionStorage.getItem('token');
  let product = [];
  // const loading = useSelector((state) => state.productsInCart.isLoading);

  const getItems = () => {
    if (jwt === null) {
      items.map((el) => {
        if (el.inShoppingBag === true) {
          product.push(el);
        }
      });
    } else if (jwt !== null) {
      products.map((el) => {
        product.push(el);
      });
    }
  };

  return (
    <>
      {getItems()}
      {jwt !== null && product
        ? product.map((el) => (
            <BagPopupItem
              key={el.product.itemNo}
              quantity={el.cartQuantity}
              product={el.product}
              // eslint-disable-next-line
              id={el.product._id}
            />
          ))
        : product.map((el) => (
            <BagPopupItem
              key={el.itemNo}
              quantity={el.quantityInBag}
              product={el}
              // eslint-disable-next-line
              id={el._id}
            />
          ))}
    </>
  );
}

export default BagPopupItems;
