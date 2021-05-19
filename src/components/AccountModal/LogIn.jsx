import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import './AccountModal.scss';
import { useDispatch } from 'react-redux';
import { toggleAccountError } from '../../store/operations';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from '../Button/Button';

const validationFormSchema = Yup.object().shape({
  loginOrEmail: Yup.string()
    .matches(/^[a-zA-Z0-9.-@]*$/, 'Invalid login')
    .required('This is a necessary field'),
  password: Yup.string()
    .required('This is a necessary field')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols'),
  accept: Yup.boolean()
    .notOneOf([false], 'Agree to ToS and Privacy Policy')
    .required('Agree to ToS and Privacy Policy'),
});

const LogIn = () => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    const userInfo = {
      loginOrEmail: values.loginOrEmail,
      password: values.password,
    };
    axios
      .post(
        'https://postil-bedding.herokuapp.com/api/customers/login',
        JSON.stringify(userInfo),
        { headers: { 'content-type': 'Application/JSON' } }
      )
      .then(({ data }) => {
        if (typeof window !== 'undefined')
          sessionStorage.setItem('token', JSON.stringify(data.token));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(toggleAccountError('Such user does not exist'));
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
          accept: false,
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <Form className="account-modal__form">
              <Input
                classname="account-modal__form__input__field"
                placeholder="Login Or Email"
                name="loginOrEmail"
                type="text"
              />
              <Input
                classname="account-modal__form__input__field"
                placeholder="Password"
                name="password"
                type="password"
              />
              <Checkbox name="accept" />
              <span className="account-modal__form__tos-and-pp">
                By signing up you agree to <a href="blank">Terms of Service</a>{' '}
                and <a href="blank">Privacy Policy</a>
              </span>
              <Button
                className="account-modal__form__submit-button"
                type="submit"
                // eslint-disable-next-line react/no-children-prop
                children="log in"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LogIn;
