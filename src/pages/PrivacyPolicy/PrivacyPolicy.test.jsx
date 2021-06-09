import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PrivacyPolicy from './PrivacyPolicy';

describe('Privacy Policy page', () => {
  it('shoul render properly', () => {
    render(
      <Router>
        <PrivacyPolicy />
      </Router>
    );
    const link = screen.getByRole('link');
    const headings = screen.getAllByRole('heading');
    const lists = screen.getAllByRole('list');
    const listitems = screen.getAllByRole('listitem');
    expect(link).toBeVisible();
    headings.forEach((heading) => expect(heading).toBeVisible());
    lists.forEach((list) => expect(list).toBeVisible());
    listitems.forEach((listitem) => expect(listitem).toBeVisible());
  });
});
