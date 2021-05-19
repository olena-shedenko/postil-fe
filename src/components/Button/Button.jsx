import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classnames from 'classnames';

/*
 * params:
 *   variant: "dark", "light", "bordered" "light-bordered"//needs to be passed via props <Button variant="light">
 */
const Button = (props) => {
  const { children, onClick, className, type, variant } = props;
  const btnClass = classnames('btn', className, {
    'btn-dark': variant === 'dark',
    'btn-light': variant === 'light',
    'btn-bordered': variant === 'bordered',
    'btn-light-bordered': variant === 'light-bordered',
  });
  return (
    <>
      <button
        onClick={onClick}
        className={btnClass}
        type={type === 'submit' ? 'submit' : 'button'}
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
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: '',
  children: '',
  onClick: () => {},
  className: '',
  variant: '',
};

export default Button;
