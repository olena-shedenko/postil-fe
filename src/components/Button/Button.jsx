import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, onClick, className, backgroundColor, type }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={className}
        /* eslint-disable-next-line react/button-has-type */
        type={type}
        style={{ background: backgroundColor }}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  children: 'Button',
  onClick: () => {},
  className: 'btn',
  backgroundColor: 'white',
};

export default Button;
