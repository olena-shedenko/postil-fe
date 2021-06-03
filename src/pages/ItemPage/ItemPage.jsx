import React from 'react';
import './ItemPage.scss';
import { useSelector } from 'react-redux';
import {
  sliceProductsForPagination,
  getPerPage,
  getProducts,
} from '../../store/selectors';
import Button from '../../components/Button/Button';
import { Facebook, Twitter, Instagram } from '../../components/Icons';

// const ItemPage = () => {
//   return (
//     <div className="item-container">
//       <Product product={product._id} />
//     </div>
//   );
// };

// export default ItemPage;

const ItemPage = () => {
  const perPage = useSelector(getPerPage);
  const slicedProducts = useSelector(sliceProductsForPagination);
  const productsAll = useSelector(getProducts);
  const products = perPage ? slicedProducts : productsAll;

  return (
    <>
      <div className="item-container">
        {products &&
          products.map((product) => (
            /* eslint no-underscore-dangle: 0 */
            <div className="item" key={product._id}>
              <img
                src={`${product.imageUrls[0]}`}
                alt="product"
                className="item__img"
              />
              <div className="item__info">
                <p className="item__name">{product.name}</p>
                <div>
                  <Facebook
                    color="#373F41"
                    className="ft-icons__fb-icon ft-icons__icon"
                  />
                  <Twitter
                    color="#373F41"
                    className="ft-icons__tw-icon ft-icons__icon"
                  />
                  <Instagram
                    color="#373F41"
                    className="ft-icons__inst-icon ft-icons__icon"
                  />
                </div>
                <p className="item__id">Product id: {product.itemNo}</p>
                <p className="item__color">Color</p>
                <p className="item__size">Size</p>
                <p className="item__price">${product.currentPrice}.00</p>

                <Button variant="dark" type="button" className="btn">
                  ADD TO BAG
                </Button>

                <div className="item__description-title">
                  {' '}
                  - PRODUCT DESCRIPTION
                </div>
                <div className="card__description">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts
                  </p>
                </div>
                <div className="card__reviews">+ REVIEWS</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemPage;
