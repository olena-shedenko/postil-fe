/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import React from 'react';
import '../Input.scss';

const Input = ({
  type,
  name,
  placeholder,
  classname = 'input__field',
  testId,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="form__input">
      <input
        data-testid={testId}
        placeholder={placeholder}
        className={classname}
        type={type}
        name={field.name}
        {...field}
      />
      {meta.error && meta.touched && (
        <span className="form__input__error">{meta.error}</span>
      )}
    </div>
  );
};

export default Input;
