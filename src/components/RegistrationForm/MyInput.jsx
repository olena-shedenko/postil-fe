/* eslint-disable */
import { useField } from 'formik';
import React from 'react';

const MyInput = (props) => {
  const { type, label, name } = props;
  const [field, meta] = useField(name);
  return (
    <div className="registration-form__input">
      <div>
        <label className="label">
          <input type={type} {...field} placeholder={label} />
        </label>
      </div>
      {meta.error && meta.touched && (
        <span className="error">{meta.error}</span>
      )}
    </div>
  );
};

export default MyInput;
