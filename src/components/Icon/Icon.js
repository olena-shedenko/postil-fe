/* eslint-disable */
import React from 'react';
import * as Icons from '../../themes/icons';

const Icon = (props) => {
  const { type = 'heart', color, onClick, filled } = props;
  const IconJSX = Icons[type];

  if (!IconJSX) return null;

  return (
    <span onClick={onClick}>
      {IconJSX({
        color: color,
        filled: filled,
      })}
    </span>
  );
};

export default Icon;
