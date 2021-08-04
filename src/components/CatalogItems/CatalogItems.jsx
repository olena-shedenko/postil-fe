import React from 'react';
import { useSelector } from 'react-redux';
import {
  catalogItemsSelector,
  // getCatalogItems,
  // getPerPage,
  // getProducts,
} from '../../store/selectors';
import './CatalogItems.scss';
import CatalogItem from '../CatalogItem/CatalogItem';

const CatalogItems = () => {
  // const perPage = useSelector(getPerPage);
  // const slicedProducts = useSelector(catalogItemsSelector);
  // const productsAll = useSelector(getProducts);
  // eslint-disable-next-line no-console

  // const products = perPage ? slicedProducts : productsAll;
  const items = useSelector(catalogItemsSelector);
  // eslint-disable-next-line no-console
  // console.log(items);

  return (
    <div className="catalog-main-products cg-products">
      {items && items.map((item) => <CatalogItem item={item} key={item._id} />)}
    </div>
  );
};

export default CatalogItems;
