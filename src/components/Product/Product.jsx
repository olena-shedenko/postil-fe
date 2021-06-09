import React from 'react';
import './Product.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ReactComponent as Favourites } from '../../images/svg/heart.svg';

const Product = ({ img, name, itemNo, color, sizes, currentPrice }) => {
  return (
    <>
      <div className="product-container container">
        <div className="product">
          <div className="product-img">
            <div className="product__img-wrapper">
              <img src={img} alt="bed-sheets" className="product__img" />
            </div>
            <div className="product__img-wrapper small">
              <img src={img} alt="bed-sheets" className="product__img" />
              <img src={img} alt="bed-sheets" className="product__img" />
              <img src={img} alt="bed-sheets" className="product__img" />
            </div>
          </div>
          <div className="product__info">
            <h1 className="product__name">{name}</h1>
            <h5 className="product__id">Product id: {itemNo}</h5>
            <h5 className="product__color">Color</h5>
            <div>{color}</div>
            <h5 className="product__size">Size</h5>
            <div>{sizes}</div>
            <div className="product__price-wrapper">
              <h5 className="product__price">USD ${currentPrice}</h5>
              <div>
                <Button variant="dark" type="button" className="btn__add">
                  ADD TO BAG
                </Button>
              </div>
              <div className="navbar--item  icon">
                <Favourites />
              </div>
            </div>
            <p className="product__preorder">pre-order</p>
            <div className="product__description">
              <h5 className="description__title">- PRODUCT DESCRIPTION</h5>
              <p className="description__text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts
              </p>
              <h5 className="product__reviews">+ REVIEWS</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-container container">
        <h1 className="slider-title">related items</h1>
      </div>
    </>
  );
};

Product.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default Product;
