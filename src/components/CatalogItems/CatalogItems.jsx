// /* eslint-disable no-unused-expressions */
import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  sliceProductsForPagination,
  getPerPage,
  getProducts,
} from '../../store/selectors';
// import { addToCart } from '../../store/operations';
// import Button from '../Button/Button';
import './CatalogItems.scss';
import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogItems = () => {
  // const dispatch = useDispatch();
  const perPage = useSelector(getPerPage);
  const slicedProducts = useSelector(sliceProductsForPagination);
  const productsAll = useSelector(getProducts);
  const products = perPage ? slicedProducts : productsAll;
  // const history = useHistory();

  return (
    <div className="catalog-main-products cg-products">
      {products &&
        products.map((product) => (
          <CatalogItem
            key={product.itemNo}
            id={product._id}
            name={product.name}
            img={product.imageUrls[0]}
            currentPrice={product.currentPrice}
          />
        ))}
    </div>
  );
};

export default CatalogItems;
