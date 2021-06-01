import React from 'react';
import { Field, useField } from 'formik';
import '../AccountModal.scss';

// eslint-disable-next-line react/prop-types
const Checkbox = ({ name = 'accept' }) => {
  const [meta] = useField(name);
  return (
    <div className="accept-tos">
      <Field type="checkbox" name={name} className="checkbox-tick" />

      <span className="checkbox-text-wrap">
        By signing up you agree to{' '}
        <a href="blank" className="checkbox-text-wrap__item">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="blank" className="checkbox-text-wrap__item">
          Privacy Policy
        </a>
      </span>
      {meta.error && meta.touched && (
        <span className="checkbox-error">{meta.error}</span>
      )}
    </div>
  );
};

export default Checkbox;
