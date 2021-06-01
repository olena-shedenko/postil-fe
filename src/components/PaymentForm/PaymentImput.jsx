/* eslint-disable */
import { useField } from 'formik';
import React from 'react';

const PaymentImput = (props) => {
  const { type, label, name, className, maxlength, onKeyDown } = props;
  const [field] = useField(name);
  return (
    <>
      <input
        type={type}
        {...field}
        placeholder={label}
        className={className}
        maxLength={maxlength}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default PaymentImput;
