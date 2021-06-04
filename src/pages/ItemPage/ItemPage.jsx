import React from 'react';
import './ItemPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import { Facebook, Twitter, Instagram } from '../../components/Icons';
import RadioButtonsGroup from '../../components/RadioButtonsGroup/RadioButtonsGroup';
import {
  getProducts,
  getFilterSize,
  getFilterColor,
} from '../../store/selectors';
import { filterSize, filterColor } from '../../store/actions';
import { filterAndSortOperation } from '../../store/operations';

const ItemPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const sizes = useSelector(getFilterSize);
  const colors = useSelector(getFilterColor);

  return (
    <>
      <div className="item-container">
        <Breadcrumbs />
        {products.slice(0, 1).map((product) => (
          /* eslint no-underscore-dangle: 0 */
          <div className="item" key={product._id}>
            <div className="item__img-wrapper">
              <img
                src={`${product.imageUrls[0]}`}
                alt="bed sheets"
                className="item__img"
              />
              <div className="item__img-wrapper small">
                <img
                  src={`${product.imageUrls[1]}`}
                  alt="bed sheets"
                  className="item__img"
                />
                <img
                  src={`${product.imageUrls[2]}`}
                  alt="bed sheets"
                  className="item__img"
                />
                <img
                  src={`${product.imageUrls[3]}`}
                  alt="bed sheets"
                  className="item__img"
                />
              </div>
            </div>

            <div className="item__info">
              <h5 className="item__name">{product.name}</h5>
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
              <div className="item__color-btn">
                <RadioButtonsGroup
                  value={colors}
                  values={{
                    red: '',
                    pink: '',
                    green: '',
                    blue: '',
                    white: '',
                    brown: '',
                    olive: '',
                    grey: '',
                    'ivory/natural/cream': '',
                  }}
                  name="size"
                  className="color-btns__btn"
                  isColored
                  onChange={(color) => {
                    dispatch(filterColor(color));
                    dispatch(filterAndSortOperation());
                  }}
                />
              </div>
              <p className="item__size">Size</p>
              <div className="item__size-btn">
                <RadioButtonsGroup
                  value={sizes}
                  values={{
                    single: 'single',
                    double: 'double',
                    queen: 'queen',
                    king: 'king',
                  }}
                  name="size"
                  className="btns-group__btn"
                  onChange={(size) => {
                    dispatch(filterSize(size));
                    dispatch(filterAndSortOperation());
                  }}
                />
              </div>
              <p className="item__price">${product.currentPrice}.00</p>
              <Button variant="dark" type="button" className="btn__add">
                ADD TO BAG
              </Button>
              <div className="item__description">
                <h5 className="description-title"> - PRODUCT DESCRIPTION</h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
              </div>
              <h5 className="item__reviews">+ REVIEWS</h5>
            </div>
          </div>
        ))}
        <div className="slider-container">
          <h5 className="slider__title">RELATED ITEMS</h5>
          <Slider />
        </div>
      </div>
    </>
  );
};

export default ItemPage;
