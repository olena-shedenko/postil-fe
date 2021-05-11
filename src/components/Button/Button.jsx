import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children,
  onClick,
  className,
  type,
  backgroundColor,
  elementPadding,
  textColor,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`common-btn-styles ${className}`}
        style={{
          background: backgroundColor,
          paddingLeft: elementPadding,
          paddingRight: elementPadding,
          color: textColor,
        }}
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
  backgroundColor: PropTypes.string,
  elementPadding: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  children: 'Button',
  onClick: () => {},
  className: 'btn',
  backgroundColor: 'white',
  elementPadding: '90px',
  textColor: '#fff',
};

export default Button;
