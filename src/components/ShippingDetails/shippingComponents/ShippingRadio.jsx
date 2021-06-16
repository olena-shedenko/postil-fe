import React from 'react';
import PropTypes from 'prop-types';

const ShippingRadio = ({
  field: { name, value, onChange, onBlur },
  id,
  text,
  span,
  labelClass,
  ...props
}) => {
  return (
    <label className={labelClass} onChange={onChange} htmlFor={id}>
      <input
        data-testid="shipping-radio"
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onBlur={onBlur}
        className="checkbox"
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
      />
      <div className="checkbox--check" />
      <div className="checkboxes--item__block">
        <p className="checkboxes--item__text">{text}</p>
        <p className="checkboxes--item__subtext">{span}</p>
      </div>
    </label>
  );
};

ShippingRadio.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  id: PropTypes.string,
  text: PropTypes.string,
  span: PropTypes.string,
  labelClass: PropTypes.string,
};

ShippingRadio.defaultProps = {
  field: PropTypes.arrayOf(
    PropTypes.shape({
      name: '',
      value: '',
      onChange: () => {},
      onBlur: () => {},
    })
  ),
  id: '',
  text: '',
  span: '',
  labelClass: '',
};

export default ShippingRadio;
