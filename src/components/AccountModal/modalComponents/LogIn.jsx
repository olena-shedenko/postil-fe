/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import '../AccountModal.scss';
import { useDispatch } from 'react-redux';
import { setModalSignUp } from '../../../store/operations';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from '../../Button/Button';

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

const LogIn = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
          accept: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <>
              <h5 className="mobile-modal-heading">Login</h5>
              <Form className="form">
                <Input
                  classname="form__input__field"
                  placeholder="Login Or Email"
                  name="loginOrEmail"
                  type="text"
                />
                <Input
                  classname="form__input__field"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <Checkbox name="accept" />

                <span
                  className="bottom-link"
                  onClick={() => dispatch(setModalSignUp())}
                >
                  i don&apos;t have an account
                </span>

                <Button
                  className="submit-button"
                  type="submit"
                  // eslint-disable-next-line react/no-children-prop
                  children="log in"
                />
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LogIn;
