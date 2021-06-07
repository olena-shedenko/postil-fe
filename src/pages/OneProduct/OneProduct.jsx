import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import { getProducts } from '../../store/selectors';
import { getItems } from '../../store/operations';

const OneProduct = () => {
  // const product = useSelector(getProduct);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (products.length > 0) {
      const currentProduct = products.find(
        (el) => String(el.id) === params.productId
      );
      dispatch(currentProduct);
    } else {
      dispatch(getItems(params.productId));
    }
  }, []);

  if (isloader) {
    return 'Loading...';
  }
  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default OneProduct;
