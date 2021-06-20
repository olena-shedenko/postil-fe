import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import { getProducts, getCategories } from '../../store/selectors';

const OneProduct = ({ category }) => {
  const params = useParams();
  const product = useSelector((state) =>
    state.items.data.length
      ? /* eslint no-underscore-dangle: 0 */
        state.items.data.find((item) => item._id === params.id)
      : null
  );
  const byCategory = ({ category }) => {
    const products = useSelector(getProducts);
    const categories = useSelector(getCategories);
    const productsByCategory = products.filter(
      (prod) => prod.categories === category
    );
  };

  // const products = useSelector(getProducts);
  // console.log(products);

  if (!product) return null;

  /* eslint no-console: 0 */
  console.log('productId:', params.id);
  /* eslint no-console: 0 */
  console.log('product from state:', product);
  /* eslint no-console: 0 */
  console.log('product name:', product.name);
  /* eslint no-console: 0 */
  console.log('product color:', product.color);
  /* eslint no-console: 0 */
  console.log('product categories:', product.categories);
  return (
    <div className="container">
      <Breadcrumbs />
      <Product
        name={product.name}
        img={product.imageUrls}
        itemNo={product.itemNo}
        color={product.color}
        sizes={product.sizes}
        currentPrice={product.currentPrice}
      />
      <SlickSlider
      // name={shortInfo.name}
      // img={shortInfo.imageUrls}
      // currentPrice={shortInfo.currentPrice}
      />
    </div>
  );
};

export default OneProduct;
