// /* eslint-disable no-unused-expressions */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  sliceProductsForPagination,
  getPerPage,
  getProducts,
} from '../../store/selectors';
import { addToCart } from '../../store/operations';
import Button from '../Button/Button';
import './CatalogItems.scss';

const CatalogItems = () => {
  const dispatch = useDispatch();
  const perPage = useSelector(getPerPage);
  const slicedProducts = useSelector(sliceProductsForPagination);
  const productsAll = useSelector(getProducts);
  const products = perPage ? slicedProducts : productsAll;
  const history = useHistory();

  return (
    <div className="catalog-main-products cg-products">
      {products &&
        products.map((product) => (
          <Link
            to={{ pathname: `/product/${product._id}` }}
            className="cg-products__item cg-item"
            key={product.itemNo}
          >
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
                  onClick={() => {
                    const id = product._id;
                    // eslint-disable-next-line no-console
                    console.log(id);
                    dispatch(
                      addToCart({
                        productId: product._id,
                        onSuccess: () => history.push('/shopping_cart'),
                      })
                    );
                  }}
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CatalogItems;
