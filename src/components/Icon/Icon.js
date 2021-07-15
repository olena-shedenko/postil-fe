/* eslint-disable */
import React from 'react';
import * as Icons from '../../themes/icons';

const Icon = (props) => {
  const { type = 'heart', color, onClick, inWishList, title } = props;
  const IconJSX = Icons[type];

  if (!IconJSX) return null;

  return (
    <span onClick={onClick} title={title}>
      {IconJSX({
        color: color,
        filled: inWishList,
      })}
    </span>
  );
};

export default Icon;
