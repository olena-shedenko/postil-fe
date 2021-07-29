import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  addToCart,
  addToWishlist,
  removeProductFromWishlist,
} from '../../store/operations';
// import { getWishList } from '../../store/selectors';
import Button from '../Button/Button';
import './CatalogItem.scss';
import Icon from '../Icon/Icon';

const CatalogItem = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Link
      to={{ pathname: `/product/${item._id}` }}
      className="cg-products__item cg-item"
    >
      <img
        src={`${item.imageUrls[0]}`}
        alt="product"
        className="cg-item__img"
      />
      <h5 className="cg-item__name">{item.name}</h5>
      <div className="cg-item__hover item-hover">
        <Button
          className="btn favourite"
          onClick={(event) => {
            event.preventDefault();
            if (item.inWishList) {
              dispatch(removeProductFromWishlist(item._id));
            } else {
              dispatch(addToWishlist(item._id));
            }
          }}
        >
          {item.inWishList ? (
            <Icon
              color="#fff"
              title="Remove from Wishlist"
              inWishList
              // onClick={(event) => {
              //   event.preventDefault();
              //   event.stopPropagation();
              //   dispatch(removeProductFromWishlist(item._id));
              // }}
            />
          ) : (
            <Icon
              color="#fff"
              title="Add to Wishlist"
              // onClick={(event) => {
              //   event.preventDefault();
              //   event.stopPropagation();
              //   dispatch(addToWishlist(item._id));
              // }}
            />
          )}
        </Button>
        <h5 className="item-hover__name">{item.name}</h5>
        <p className="item-hover__price">${item.currentPrice}</p>
        <div className="item-hover__btn hover-btn">
          <Button
            variant="light-bordered"
            type="button"
            className="hover-btn__btn"
            onClick={() => {
              //   const id = product._id;
              // eslint-disable-next-line no-console
              // console.log(id);
              dispatch(
                addToCart({
                  productId: item._id,
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
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inWishList: PropTypes.bool.isRequired,
    currentPrice: PropTypes.number.isRequired,
    imageUrls: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
