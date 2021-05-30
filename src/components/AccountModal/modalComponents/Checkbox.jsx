import React from 'react';
import { Field, useField } from 'formik';
import '../AccountModal.scss';

// eslint-disable-next-line react/prop-types
const Checkbox = ({ name = 'accept' }) => {
  const [meta] = useField(name);
  return (
    <div className="accept-tos">
      <Field type="checkbox" name={name} className="checkbox-tick" />
      <p className="checkbox-text-wrap">
        <span className="checkbox-text-wrap__item">
          Let&#39;s get personal! We&#39;ll send you only the good stuff:
        </span>
        <span className="checkbox-text-wrap__item">
          Exclusive early access to Sale, new arrivals and promotions.
        </span>
        <span className="checkbox-text-wrap__item">No nasties.</span>
      </p>
      {meta.error && meta.touched && (
        <span className="checkbox-error">{meta.error}</span>
      )}
    </div>
  );
};

export default Checkbox;
