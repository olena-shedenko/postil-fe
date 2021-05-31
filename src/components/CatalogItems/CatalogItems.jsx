// /* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  sliceProductsForPagination,
  getPerPage,
  getProducts,
} from '../../store/selectors';
import Button from '../Button/Button';
import './CatalogItems.scss';

const CatalogItems = () => {
  const perPage = useSelector(getPerPage);
  const slicedProducts = useSelector(sliceProductsForPagination);
  const productsAll = useSelector(getProducts);
  const products = perPage ? slicedProducts : productsAll;
  return (
    <div className="catalog-main-products cg-products">
      {products &&
        products.map((product) => (
          <div className="cg-products__item cg-item" key={product.itemNo}>
            <img
              src={`${product.imageUrls[0]}`}
              alt="product"
              className="cg-item__img"
            />
            <h5 className="cg-item__name">{product.name}</h5>
            <div className="cg-item__hover item-hover">
              <h5 className="item-hover__name">{product.name}</h5>
              <p className="item-hover__price">${product.currentPrice}</p>
              <div className="item-hover__btn hover-btn">
                <Button
                  variant="light-bordered"
                  type="button"
                  className="hover-btn__btn"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CatalogItems;
