import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from '../modalComponents/Checkbox';

describe('account modal Checkbox test', () => {
  it('smoke', () => {
    render(<Checkbox />);
    const checkbox = screen.getByTestId('account-modal-checkbox');
    expect(checkbox).toBeVisible();
  });
});
