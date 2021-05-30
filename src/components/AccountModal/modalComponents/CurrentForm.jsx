import React from 'react';
import { useSelector } from 'react-redux';
import SignUp from './SignUp';
import LogIn from './LogIn';
import ForgotPassword from './ForgotPassword';

const CurrentForm = () => {
  const type = useSelector((state) => state.accountModalAction);
  let component;
  switch (type) {
    case 'signUp':
      component = <SignUp />;
      break;
    case 'logIn':
      component = <LogIn />;
      break;
    case 'forgotPassword':
      component = <ForgotPassword />;
      break;
    default:
      component = <SignUp />;
      break;
  }
  return component;
};

export default CurrentForm;
