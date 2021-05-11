import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const classNames = require('classnames');

const Button = ({
  children,
  onClick,
  className,
  type,
  addCommonStyles,
  addFooterStyles,
}) => {
  const elementsStyles = classNames({
    'common-btn-styles': addCommonStyles,
    'footer-button': addFooterStyles,
  });

  return (
    <>
      <button
        onClick={onClick}
        className={`${elementsStyles} ${className}`}
        /* eslint-disable-next-line react/button-has-type */
        type={type}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  addCommonStyles: PropTypes.bool,
  addFooterStyles: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  children: 'Button',
  onClick: () => {},
  className: null,
  addCommonStyles: true,
  addFooterStyles: false,
};

export default Button;
