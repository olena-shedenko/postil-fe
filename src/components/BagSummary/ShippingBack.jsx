import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../images/svg/leftArrow.svg';
import './ShippingCheckout.scss';

const ShippingBack = () => {
  const history = useHistory();
  return (
    <div className="back" role="presentation" onClick={() => history.goBack()}>
      <LeftArrow />
      <div className="back--text">Back</div>
    </div>
  );
};

export default ShippingBack;
