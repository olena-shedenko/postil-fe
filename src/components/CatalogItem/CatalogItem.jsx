import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { addToCart } from '../../store/operations';
import Button from '../Button/Button';
import './CatalogItem.scss';

const CatalogItem = ({ id, img, name, currentPrice, itemNo, items }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Link
      to={{ pathname: `/product/${id}` }}
      className="cg-products__item cg-item"
    >
      <img src={`${img}`} alt="product" className="cg-item__img" />
      <h5 className="cg-item__name">{name}</h5>
      <div className="cg-item__hover item-hover">
        <h5 className="item-hover__name">{name}</h5>
        <p className="item-hover__price">${currentPrice}</p>
        <div className="item-hover__btn hover-btn">
          <Button
            variant="light-bordered"
            type="button"
            className="hover-btn__btn"
            onClick={() => {
              dispatch(
                addToCart({
                  productId: id,
                  productNo: itemNo,
                  item: items,
                  historys: history,
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
  );
};

export default CatalogItem;

CatalogItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  itemNo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
