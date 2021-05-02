import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import "./AccountModal.scss";
import Input from "./Input";

const validationFormSchema = Yup.object().shape({
  password: Yup.string()
    .required("This is a necessary field")
    .min(9, "The password sholud consist of minimum 9 symbols")
    .max(30, "The password sholud not consist of more than 30 symbols"),
  email: Yup.string()
    .email("Invalid email")
    .required("This is a necessary field"),
});

const LogIn = () => {
  const submitForm = () => {};

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
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
                  <button
                    type="button"
                    className="account-modal__buttons-block__button account-modal__buttons-block__button__signup"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className="account-modal__buttons-block__button account-modal__buttons-block__button__login--active"
                  >
                    Log In
                  </button>
                </div>

                <Form className="account-modal__form">
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

                <button type="submit">Submit</button>

                <a href="blank" className="account-modal__ihaveanaccount-link">
                  forgot the password?
                </a>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LogIn;
