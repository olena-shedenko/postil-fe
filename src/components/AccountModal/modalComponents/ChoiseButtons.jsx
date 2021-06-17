import React from 'react';
import '../AccountModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Button/Button';
import { setModalSignUp, setModalLogIn } from '../../../store/operations';

const ChoiseButtons = () => {
  const forSignUp = useSelector(
    (state) => state.accountModalAction === 'signUp'
  );
  const dispatch = useDispatch();

  return (
    <div className="buttons-block">
      <Button
        onClick={() => {
          dispatch(setModalSignUp());
        }}
        type="button"
        addCommonStyles={false}
        className={
          forSignUp
            ? 'buttons-block__button buttons-block__button__signup--active'
            : 'buttons-block__button buttons-block__button__signup'
        }
        // eslint-disable-next-line react/no-children-prop
        children="Sign Up"
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          dispatch(setModalLogIn());
        }}
        type="button"
        addCommonStyles={false}
        className={
          forSignUp
            ? 'buttons-block__button buttons-block__button__login'
            : 'buttons-block__button buttons-block__button__login--active'
        }
        // eslint-disable-next-line react/no-children-prop
        children="Log In"
      />
    </div>
  );
};

export default ChoiseButtons;
