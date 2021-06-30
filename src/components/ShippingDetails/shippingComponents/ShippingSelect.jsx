import React from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';

function ShippingSelect(props) {
  const { label, name, options, classname } = props;
  const [select, meta] = useField(name);
  return (
    <div className="shipping--block">
      <label htmlFor={name}>{label}</label>
      <Field
        data-testid="shipping-select"
        className={classname}
        as="select"
        id={name}
        name={name}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...select}
      >
        {options.map((option) => {
          return (
            <option
              className="shipping--block__option"
              key={option.value}
              value={option.value}
            >
              {option.key}
            </option>
          );
        })}
      </Field>
      {meta.touched && meta.error && (
        <span className="shipping--error">{meta.error}</span>
      )}
    </div>
  );
}

ShippingSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.instanceOf(Array),
  classname: PropTypes.string,
};
ShippingSelect.defaultProps = {
  label: '',
  name: '',
  classname: '',
  options: '',
};

export default ShippingSelect;
