import React from 'react';
import { useSelector } from 'react-redux';
import BagPopupItem from '../BagPopupItem/BagPopupItem';

function BagPopupItems(props) {
  const { products } = props;
  // const products = useSelector((state) => state.productsInCart.data);
  const loading = useSelector((state) => state.productsInCart.isLoading);

  return (
    <>
      {!loading &&
        products &&
        products.map((el) => (
          <BagPopupItem
            key={el.itemNo}
            quantity={el.quantityInBag}
            product={el}
            products={products}
            // eslint-disable-next-line
            id={el._id}
          />
        ))}
    </>
  );
}

export default BagPopupItems;
