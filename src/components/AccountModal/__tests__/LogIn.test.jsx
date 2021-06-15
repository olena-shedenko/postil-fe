import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogIn from '../modalComponents/LogIn';

describe('Log In test', () => {
  it('shold render', () => {
    render(<LogIn />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
  it('should call submit with values', () => {
    const submit = jest.fn();
    render(<LogIn handleSubmit={submit} handleBottomLink={jest.fn()} />);
    userEvent.type(screen.getByTestId('loginOrEmail'), 'testLogin');
    userEvent.type(screen.getByTestId('login-password'), '123123123123');
    userEvent.click(screen.getByTestId('account-modal-checkbox'));
    userEvent.click(screen.getByTestId('account-modal-button'));
  });
});
