/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './AccountModal.scss';
import { useDispatch } from 'react-redux';
import { toggleAccountModal } from '../../store/operations';
import MobileModal from './layouts/MobileModal';
import DesktopModal from './layouts/DesktopModal';
import ErrorMessage from './layouts/ErrorMessage';

const AccountModal = () => {
  const dispatch = useDispatch();

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
        <MobileModal />

        <DesktopModal />
      </div>
    </>
  );
};

export default AccountModal;
