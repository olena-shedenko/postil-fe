/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import '../AccountModal.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setModalLogIn } from '../../../store/operations';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from '../../Button/Button';

const validationFormSchema = Yup.object().shape({
  login: Yup.string()
    .matches(/^[a-zA-Z0-9.-_]*$/, 'Invalid login')
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters')
    .required('This is a necessary field'),
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid name')
    .required('This is a necessary field'),
  password: Yup.string()
    .required('This is a necessary field')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols'),
  passwordconf: Yup.string()
    .oneOf([Yup.ref('password')], 'Both passwords need to be the same')
    .required('Repeat the password, please'),
  email: Yup.string()
    .email('Invalid email')
    .required('This is a necessary field'),
  accept: Yup.boolean()
    .notOneOf([false], 'Agree to ToS and Privecy Policy')
    .required('Agree to ToS and Privecy Policy'),
});

const SignUp = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          login: '',
          name: '',
          password: '',
          passwordconf: '',
          email: '',
          accept: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <>
              <h5 className="mobile-modal-heading">Sign up</h5>
              <Form className="form">
                <Input
                  classname="form__input__field"
                  placeholder="Name Surname"
                  name="name"
                  type="text"
                />
                <Input
                  classname="form__input__field"
                  placeholder="Login"
                  name="login"
                  type="text"
                />
                <Input
                  classname="form__input__field"
                  placeholder="Email"
                  name="email"
                  type="text"
                />
                <Input
                  classname="form__input__field"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <Input
                  classname="form__input__field"
                  placeholder="Confirm Password"
                  name="passwordconf"
                  type="password"
                />
                <Checkbox name="accept" />
                <span
                  className="bottom-link"
                  onClick={() => dispatch(setModalLogIn())}
                >
                  i have an account
                </span>

                <Button
                  className="submit-button"
                  type="submit"
                  // eslint-disable-next-line react/no-children-prop
                  children="sign up"
                />
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUp;
