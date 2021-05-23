import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import BagPopupItem from '../BagPopupItem/BagPopupItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../../store/operations';

async function BagPopupItems() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.productsInCart);

  return (
    <>
      {/* {items.map(() => ( */}
      {/*  <BagPopupItem /> */}
      {/* ))} */}
      {/* {items.forEach((i) => { */}
      {/*  console.log(i.product); */}
      {/* })} */}
      {console.log(products)}
    </>
  );
}

// BagPopUpItems.propTypes = {
//     items:
// }

export default BagPopupItems;
