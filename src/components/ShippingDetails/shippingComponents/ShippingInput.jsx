import { useField } from 'formik';
import React from 'react';
import '../ShippingDetails.scss';
import PropTypes from 'prop-types';

const ShippingInput = (props) => {
  const { type, name, placeholder, width, classname } = props;
  const [field, meta] = useField(name);

  return (
    <div className="shipping--block">
      <input
        data-testid="shipping-input"
        placeholder={placeholder}
        name={field.name}
        className={`${classname} ${
          meta.touched && meta.error && 'shipping--error__mark'
        }`}
        type={type}
        style={{ width }}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...field}
      />
      {meta.touched && meta.error && (
        <span className="shipping--error">{meta.error}</span>
      )}
    </div>
  );
};
ShippingInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  classname: PropTypes.node,
  width: PropTypes.string,
};

ShippingInput.defaultProps = {
  type: '',
  name: '',
  placeholder: '',
  classname: '',
  width: '',
};

export default ShippingInput;
