import React from 'react';
import { Field, useField } from 'formik';
import '../AccountModal.scss';

// eslint-disable-next-line react/prop-types
const Checkbox = ({ name = 'accept' }) => {
  const [meta] = useField(name);
  return (
    <div className="account-modal__form__accept-tos">
      <Field
        type="checkbox"
        name={name}
        className="account-modal__form__accept-tos__checkbox-tick"
      />
      <p className="account-modal__form__accept-tos__checkbox-text-wrap">
        <span className="account-modal__form__accept-tos__checkbox-text-wrap-item">
          Let&#39;s get personal! We&#39;ll send you only the good stuff:
        </span>
        <span className="account-modal__form__accept-tos__checkbox-text-wrap-item">
          Exclusive early access to Sale, new arrivals and promotions.
        </span>
        <span className="account-modal__form__accept-tos__checkbox-text-wrap-item">
          No nasties.
        </span>
      </p>
      {meta.error && meta.touched && (
        <span className="account-modal__form__accept-tos__checkbox-error">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
