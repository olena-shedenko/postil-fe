import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import '../AccountModal.scss';
import Input from './Input';
import Button from '../../Button/Button';

const validationFormSchema = Yup.object().shape({
  password: Yup.string()
    .required('This is a necessary field')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols'),
  newPassword: Yup.string()
    .required('This is a necessary field')
    .min(9, 'The password sholud consist of minimum 9 symbols')
    .max(30, 'The password sholud not consist of more than 30 symbols'),
});

const ChangePassword = () => {
  const submitForm = (values) => {
    const userInfo = {
      newPassword: values.newPassword,
      password: values.password,
    };
    axios.put(
      'https://postil-bedding.herokuapp.com/api/customers/login',
      userInfo
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          newPassword: '',
          password: '',
        }}
        onSubmit={submitForm}
        validationSchema={validationFormSchema}
      >
        {() => {
          return (
            <Form className="account-modal__form">
              <Input
                classname="account-modal__form__input__field"
                placeholder="Password"
                name="password"
                type="password"
              />
              <Input
                classname="account-modal__form__input__field"
                placeholder="New Password"
                name="newPasswoed"
                type="text"
              />
              <Button
                className="account-modal__form__submit-button"
                type="submit"
                // eslint-disable-next-line react/no-children-prop
                children="chage password"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ChangePassword;
