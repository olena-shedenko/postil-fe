import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './BagPopup.scss';

export default function BagPopup(props) {
  const { itemCount, totalPrice } = props;

  const handleClose = (e) => {
    const popup = document.querySelector('.bagpopup-wrap');
    const closeBtn = document.querySelector('.bagpopup-header__close img');

    if (e.target === popup || e.target === closeBtn) {
      popup.remove();
    }
  };

  return (
    /* eslint-disable-next-line */
    <div onClick={(e) => handleClose(e)} className="bagpopup-wrap">
      <div className="bagpopup-content">
        <div className="bagpopup-header">
          <div className="bagpopup-header__title">BAG ({itemCount})</div>
          <button
            type="button"
            onClick={(e) => handleClose(e)}
            className="bagpopup-header__close"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/close-icon.svg`}
              alt="close"
            />
          </button>
        </div>
        <div className="bagpopup-price">TOTAL: USD ${totalPrice}</div>
        <div className="bagpopup-buttons">
          <Button className="bagpopup-buttons__item" variant="light-bordered">
            VIEW BAG
          </Button>
          <Button className="bagpopup-buttons__item" variant="dark">
            CHECKOUT
          </Button>
        </div>
        <div className="bagpopup-items">items</div>
      </div>
    </div>
  );
}

BagPopup.defaultProps = {
  itemCount: 0,
  totalPrice: 0,
};

BagPopup.propTypes = {
  itemCount: PropTypes.number,
  totalPrice: PropTypes.number,
};
