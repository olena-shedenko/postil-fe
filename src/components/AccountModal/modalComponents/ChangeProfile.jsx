import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import '../AccountModal.scss';
import Input from './Input';
import Button from '../../Button/Button';

const validationFormSchema = Yup.object().shape({
  login: Yup.string()
    .matches(/^[a-zA-Z0-9]*$/, 'Invalid login')
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters'),
  name: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter a valid name'),
  email: Yup.string().email('Invalid email'),
});

const SignUp = () => {
  const submitForm = (values) => {
    axios.put('https://postil-bedding.herokuapp.com/api/customers', values);
  };

  return (
    <>
      <Formik
        initialValues={{
          login: '',
          name: '',
          email: '',
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <Form className="account-modal__form">
              <Input
                classname="account-modal__form__input__field"
                placeholder="Name Surname"
                name="name"
                type="text"
              />
              <Input
                classname="account-modal__form__input__field"
                placeholder="Login"
                name="login"
                type="text"
              />
              <Input
                classname="account-modal__form__input__field"
                placeholder="Email"
                name="email"
                type="text"
              />

              <Button
                className="account-modal__form__submit-button"
                type="submit"
                // eslint-disable-next-line react/no-children-prop
                children="Change"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
