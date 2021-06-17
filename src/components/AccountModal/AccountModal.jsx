/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './AccountModal.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCart } from '../../store/actions';
import { toggleAccountModal, toggleAccountError, setCartProducts } from '../../store/operations';
import MobileModal from './layouts/MobileModal';
import DesktopModal from './layouts/DesktopModal';
import ErrorMessage from './layouts/ErrorMessage';

const AccountModal = () => {
  const dispatch = useDispatch();

  const submitLoginForm = (values) => {
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
          sessionStorage.setItem('token', data.token);
        dispatch(toggleAccountModal());
        axios.get('https://postil-bedding.herokuapp.com/api/cart', {
          headers: {
            Authorization: data.token,
          },
        });
      })
      .then((res) => {
        if (res) dispatch(setCart(res.data));
        dispatch(setCartProducts());
      })
      .catch(() => {
        dispatch(
          toggleAccountError(
            'The password is incorrect or such user does not exist'
          )
        );
      });
  };

  const submitSignUpForm = (values) => {
    const userInfo = {
      ...values,
      firstName: values.name.split(' ')[0],
      lastName: values.name.split(' ')[1],
    };
    delete userInfo.accept;
    delete userInfo.passwordconf;
    delete userInfo.name;
    axios
      .post('https://postil-bedding.herokuapp.com/api/customers', userInfo)
      .then(({ message }) => {
        if (!message) dispatch(toggleAccountModal());
      })
      .catch(() => {
        dispatch(toggleAccountError('Such user already exists'));
      });
  };

  return (
    <>
      <ErrorMessage />

      <div
        className="modal-wrapper"
        onClick={(e) => {
          if (e.target.className === 'modal-wrapper')
            dispatch(toggleAccountModal());
        }}
      >
        <MobileModal
          loginSubmit={submitLoginForm}
          signUpSubmit={submitSignUpForm}
        />

        <DesktopModal
          loginSubmit={submitLoginForm}
          signUpSubmit={submitSignUpForm}
        />
      </div>
    </>
  );
};

export default AccountModal;
