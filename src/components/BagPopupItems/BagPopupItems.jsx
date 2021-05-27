import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BagPopupItem from '../BagPopupItem/BagPopupItem';

function BagPopupItems() {
  const products = useSelector((state) => state.productsInCart.data);
  const loading = useSelector((state) => state.productsInCart.isLoading);

  return (
    <>
      {!loading &&
        products.map((el) => (
          <BagPopupItem
            key={el.product.itemNo}
            quantity={el.currentQuantity}
            product={el.product.quantity}
          />
        ))}
    </>
  );
}

// BagPopUpItems.propTypes = {
//     items:
// }

export default BagPopupItems;
