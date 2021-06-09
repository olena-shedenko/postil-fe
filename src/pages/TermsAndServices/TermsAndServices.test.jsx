import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TermsAndServices from './TermsAndServices';

describe('TermsAndServices page', () => {
  it('should render properly', () => {
    render(
      <Router>
        <TermsAndServices />
      </Router>
    );
    const links = screen.getAllByRole('link');
    const headings = screen.getAllByRole('heading');
    const buttons = screen.getAllByRole('button');
    const lists = screen.getAllByRole('list');
    links.forEach((link) => expect(link).toBeVisible());
    headings.forEach((heading) => expect(heading).toBeVisible());
    buttons.forEach((button) => expect(button).toBeVisible());
    lists.forEach((list) => expect(list).toBeVisible());
  });
  it('should be clickable', () => {
    render(
      <Router>
        <TermsAndServices />
      </Router>
    );
    fireEvent.click(screen.getByTestId('button'));
  });
});
