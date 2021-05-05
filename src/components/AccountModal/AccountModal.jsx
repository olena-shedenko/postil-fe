import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import './AccountModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Button from '../Button/Button';
import { setModalSignUp, setModalLogIn } from '../../store/operations';

const validationFormSchema = Yup.object().shape({
  name: Yup.string()
    .oneOf([/^[A-Za-z ]*$/, null], 'Please enter a valid name')
    .required('This is a necessary field'),
  password: Yup.string()
    .required('This is a necessary field')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols'),
  password_conf: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols')
    .required('This is a necessary field'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a necessary field'),
});

const AccountModal = () => {
  const submitForm = () => {};

  //   const currentModal = useSelector((state) => state.accountModalAction);

  const dispatch = useDispatch();

  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          password: '',
          password_conf: '',
          email: '',
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <div className="modal-wrapper">
              <div className="account-modal">
                <img
                  src={`${process.env.PUBLIC_URL}/images/close-icon.svg`}
                  alt="close"
                  className="account-modal__cross"
                />

                <div className="account-modal__buttons-block">
                  {}
                  <button
                    onClick={() => {
                      dispatch(setModalSignUp());
                    }}
                    type="button"
                    className={
                      forSignUp
                        ? 'account-modal__buttons-block__button account-modal__buttons-block__button__signup--active'
                        : 'account-modal__buttons-block__button account-modal__buttons-block__button__signup'
                    }
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setModalLogIn());
                    }}
                    type="button"
                    className={
                      forSignUp
                        ? 'account-modal__buttons-block__button account-modal__buttons-block__button__login'
                        : 'account-modal__buttons-block__button account-modal__buttons-block__button__login--active'
                    }
                  >
                    Log In
                  </button>
                </div>

                <Form className="account-modal__form">
                  {forSignUp && (
                    <Input
                      classname="account-modal__form__input__field"
                      placeholder="Name"
                      name="name"
                      type="text"
                    />
                  )}
                  <Input
                    classname="account-modal__form__input__field"
                    placeholder="Email"
                    name="email"
                    type="text"
                  />
                  <Input
                    classname="account-modal__form__input__field"
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                  {forSignUp && (
                    <Input
                      classname="account-modal__form__input__field"
                      placeholder="Confirm Password"
                      name="password-conf"
                      type="password"
                    />
                  )}

                  <div className="account-modal__accept-tos">
                    <Field
                      type="checkbox"
                      name="accept"
                      className="account-modal__accept-tos__checkbox-tick"
                    />
                    <p className="account-modal__accept-tos__checkbox-text-wrap">
                      <span className="account-modal__accept-tos__checkbox-text-wrap-item">
                        Let&#39;s get personal! We&#39;ll send you only the good
                        stuff:
                      </span>
                      <span className="account-modal__accept-tos__checkbox-text-wrap-item">
                        Exclusive early access to Sale, new arrivals and
                        promotions.
                      </span>
                      <span className="account-modal__accept-tos__checkbox-text-wrap-item">
                        No nasties.
                      </span>
                    </p>
                  </div>
                </Form>
                <span className="account-modal__tos-and-pp">
                  By signing up you agree to{' '}
                  <a href="blank">Terms of Service</a> and{' '}
                  <a href="blank">Privacy Policy</a>
                </span>

                <Button
                  className="account-modal__submit-button"
                  type="submit"
                  backgroundColor="#373F41"
                  elementPadding="90px"
                  onClick={() => submitForm()}
                  // eslint-disable-next-line react/no-children-prop
                  children={forSignUp ? 'sign up' : 'log in'}
                />

                {forSignUp && (
                  <div className="account-modal__enter-via-socials">
                    <img
                      className="account-modal__enter-via-socials__item"
                      src={`${process.env.PUBLIC_URL}/images/google.svg`}
                      alt="google"
                    />
                    <img
                      className="account-modal__enter-via-socials__item"
                      src={`${process.env.PUBLIC_URL}/images/fb.svg`}
                      alt="facebook"
                    />
                  </div>
                )}

                {forSignUp ? (
                  <a href="blank" className="account-modal__bottom-link">
                    i have an account
                  </a>
                ) : (
                  <a href="blank" className="account-modal__bottom-link">
                    forgot password?
                  </a>
                )}
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default AccountModal;
