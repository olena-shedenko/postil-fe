import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  addToCart,
  addToWishlist,
  removeProductFromWishlist,
} from '../../store/operations';
import './Product.scss';
import Button from '../Button/Button';
import { Facebook, Twitter, Instagram } from '../Icons';
import SliderProduct from '../SliderProduct/SliderProduct';
import Icon from '../Icon/Icon';

const Product = ({
  img,
  name,
  color,
  sizes,
  currentPrice,
  id,
  description,
  inWishList,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className="product-container">
        <div className="product">
          <div className="product-img">
            <SliderProduct img={img} />
          </div>
          <div className="product__info">
            <h1 className="product__name">{name}</h1>
            <div className="ft-social-icons ft-icons">
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
            <h5 className="product__id">Product id: {id}</h5>
            <h5 className="product__color">Color</h5>
            <div
              style={{
                borderRadius: '100%',
                width: '20px',
                height: '20px',
                backgroundColor: `${color}`,
                color: 'transparent',
                border: '1px solid black',
              }}
            >
              {color}
            </div>
            <h5 className="product__size-title">Size</h5>
            <div className="product__size">{sizes}</div>
            <div className="product__price-wrapper">
              <h5 className="product__price">
                USD ${currentPrice}
                <p className="product__preorder">pre-order</p>
              </h5>
              <div>
                <Button
                  variant="dark"
                  type="button"
                  className="btn__add"
                  onClick={() => {
                    dispatch(
                      addToCart({
                        productId: id,
                        onSuccess: () => history.push('/shopping_cart'),
                      })
                    );
                  }}
                >
                  ADD TO BAG
                </Button>
              </div>
              <div className="btn__fav">
                <Button
                  className="btn favourites"
                  onClick={(event) => {
                    event.preventDefault();
                    if (inWishList) {
                      dispatch(removeProductFromWishlist(id));
                    } else {
                      dispatch(addToWishlist(id));
                    }
                  }}
                >
                  {inWishList ? (
                    <Icon
                      color="#fff"
                      title="Remove from Wishlist"
                      inWishList
                    />
                  ) : (
                    <Icon color="#fff" title="Add to Wishlist" />
                  )}
                </Button>
              </div>
            </div>

            <div className="product__description">
              <h5 className="product__description-title">
                PRODUCT DESCRIPTION
              </h5>
              <p className="product__description-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-header">
        <h1 className="slider__title">related items</h1>
      </div>
    </>
  );
};

Product.propTypes = {
  img: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inWishList: PropTypes.instanceOf(Array).isRequired,
};

export default Product;
