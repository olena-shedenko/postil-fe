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

const Product = ({ img, name, itemNo, color, sizes, currentPrice, id }) => {
  // /* eslint no-console: 0 */
  // console.log('id', id);
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
            <h5 className="product__id">Product id: {itemNo}</h5>
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
                        productNo: itemNo,
                        historys: history,
                        onSuccess: () => history.push('/shopping_cart'),
                      })
                    );
                  }}
                >
                  ADD TO BAG
                </Button>
              </div>
              <div>
                <Button
                  className="btn favourites"
                  onClick={(event) => {
                    event.preventDefault();
                    if (id.inWishList) {
                      dispatch(removeProductFromWishlist(id));
                    } else {
                      dispatch(addToWishlist(id));
                    }
                  }}
                >
                  {id.inWishList ? (
                    <Icon
                      color="#373f41"
                      title="Remove from Wishlist"
                      inWishList
                    />
                  ) : (
                    <Icon color="#373f41" title="Add to Wishlist" />
                  )}
                </Button>
              </div>
            </div>

            <div className="product__description">
              <h5 className="product__description-title">
                - PRODUCT DESCRIPTION
              </h5>
              <p className="product__description-text">
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
      <div className="slider-container">
        <h1 className="slider__title">related items</h1>
      </div>
    </>
  );
};

Product.propTypes = {
  img: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Product;
