import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PaymentDelivery from './PaymentDelivery';

describe('PeymentDelivery page', () => {
  it('should render properly', () => {
    render(
      <Router>
        <PaymentDelivery />
      </Router>
    );
    const link = screen.getByRole('link');
    const headings = screen.getAllByRole('heading');
    const buttons = screen.getAllByRole('button');
    expect(link).toBeVisible();
    headings.forEach((heading) => expect(heading).toBeVisible());
    buttons.forEach((button) => expect(button).toBeVisible());
  });
  it('should be clickable', () => {
    render(
      <Router>
        <PaymentDelivery />
      </Router>
    );
    fireEvent.click(screen.getByTestId('button'));
  });
});
