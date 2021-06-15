import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from '../modalComponents/SignUp';

describe('account modal test', () => {
  it('signup smoke', () => {
    render(<SignUp />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
  it('should call submit with values', async () => {
    const submit = jest.fn();
    render(<SignUp handleSubmit={submit} handleBottomLink={jest.fn()} />);
    userEvent.type(screen.getByTestId('input-name'), 'Test Test');
    userEvent.type(screen.getByTestId('input-login'), 'testLogin');
    userEvent.type(screen.getByTestId('input-email'), 'test@test.com');
    userEvent.type(screen.getByTestId('input-signup-password'), '123123123123');
    userEvent.type(screen.getByTestId('confirm-password'), '123123123123');
    userEvent.click(screen.getByTestId('account-modal-checkbox'));
    userEvent.click(screen.getByTestId('account-modal-button'));
    await waitFor(() =>
      expect(submit).toHaveBeenCalledWith(
        {
          name: 'Test Test',
          login: 'testLogin',
          email: 'test@test.com',
          password: '123123123123',
          passwordconf: '123123123123',
          accept: true,
        },
        expect.anything()
      )
    );
  });
});
