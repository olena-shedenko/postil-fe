/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import React from 'react';
import './Input.scss';

const Input = ({ type, name, placeholder, classname = 'input__field' }) => {
  const [field, meta] = useField(name);

  return (
    <div className="account-modal__form__input">
      <input
        placeholder={placeholder}
        className={classname}
        type={type}
        name={field.name}
        {...field}
      />
      {meta.error && meta.touched && (
        <span className="account-modal__form__input__error">{meta.error}</span>
      )}
    </div>
  );
};

export default Input;
