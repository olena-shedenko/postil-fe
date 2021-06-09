import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const OneProduct = () => {
  const params = useParams();
  const product = useSelector((state) =>
    state.items.data.length
      ? /* eslint no-underscore-dangle: 0 */
        state.items.data.find((item) => item._id === params.id)
      : null
  );
  if (!product) return null;
  /* eslint no-console: 0 */
  console.log('productId:', params.id);
  /* eslint no-console: 0 */
  console.log('product from state:', product);
  /* eslint no-console: 0 */
  console.log('product name:', product.name);
  /* eslint no-console: 0 */
  console.log('product color:', params.color);
  return (
    <div>
      <Breadcrumbs />
      <Product
        name={product.name}
        img={product.imageUrls[0]}
        itemNo={product.itemNo}
        color={product.color}
        sizes={product.sizes}
        currentPrice={product.currentPrice}
      />
    </div>
  );
};

export default OneProduct;
