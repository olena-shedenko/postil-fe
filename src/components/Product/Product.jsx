import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/selectors';

const Product = () => {
  const products = useSelector(getProducts);

  return (
    <>
      <div className="product-container container">
        <h1>Product</h1>
        <div className="product" key={product._id}>
          <div className="product__img-wrapper">
            <img
              src={`${'https://postil-bedding.herokuapp.com/api/products/imageUrls[0]'}`}
              alt="bed-sheets"
              className="product__img"
            />
          </div>
          <div className="product__info">
            <h5 className="product__name">{`${'https://postil-bedding.herokuapp.com/api/products/product/name'}`}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
