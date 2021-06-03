import React from 'react';
import { useSelector } from 'react-redux';
import BagPopupItem from '../BagPopupItem/BagPopupItem';

function BagPopupItems() {
  const products = useSelector((state) => state.productsInCart.data);
  const loading = useSelector((state) => state.productsInCart.isLoading);

  return (
    <>
      {!loading &&
        products &&
        products.map((el) => (
          <BagPopupItem
            key={el.product.itemNo}
            quantity={el.cartQuantity}
            product={el.product}
            // eslint-disable-next-line
            id={el.product._id}
          />
        ))}

      {products === null && console.log(1)}
    </>
  );
}

export default BagPopupItems;
