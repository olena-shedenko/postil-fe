import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classnames from 'classnames';

/*
 * params:
 *   variant: "dark", "light", "bordered" "light-bordered"//needs to be passed via props <Button variant="light">
 */
const Button = (props) => {
  const { children, onClick, className, type, variant, commonStyles, testId } =
    props;
  const btnClass = classnames(className, {
    btn: commonStyles,
    'btn-dark': variant === 'dark',
    'btn-light': variant === 'light',
    'btn-bordered': variant === 'bordered',
    'btn-light-bordered': variant === 'light-bordered',
  });
  return (
    <>
      <button
        data-testid={testId}
        onClick={onClick}
        className={`${btnClass}`}
        // form={form}
        type={type === 'submit' ? 'submit' : 'button'}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  testId: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.string,
  commonStyles: PropTypes.bool,
};

Button.defaultProps = {
  testId: 'button',
  type: 'button',
  children: '',
  onClick: () => {},
  className: '',
  variant: '',
  commonStyles: false,
};

export default Button;
