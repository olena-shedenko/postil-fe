import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Returns from './Returns';

describe('Returns page', () => {
  it('should render properly', () => {
    render(
      <Router>
        <Returns />
      </Router>
    );
    const link = screen.getByRole('link');
    const headings = screen.getAllByRole('heading');
    const list = screen.getByRole('list');
    const listitems = screen.getAllByRole('listitem');
    expect(link).toBeVisible();
    headings.forEach((heading) => expect(heading).toBeVisible());
    expect(list).toBeVisible();
    listitems.forEach((listitem) => expect(listitem).toBeVisible());
  });
});
