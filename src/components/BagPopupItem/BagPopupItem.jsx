import React from 'react';
import PropTypes from 'prop-types';

function BagPopupItem(props) {
  const { quantity, product } = props;
  console.log('1 ', product);
  return (
    <div>
      {quantity}
      <picture>{/* <img src={product} alt="" /> */}1</picture>
    </div>
  );
}

export default BagPopupItem;

BagPopupItem.defaultProps = {
  quantity: 0,
  product: {},
};

BagPopupItem.propTypes = {
  quantity: PropTypes.number,
  product: PropTypes.object,
};
