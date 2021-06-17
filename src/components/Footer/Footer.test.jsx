import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('component Footer', () => {
  it('should render properly', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const footer = screen.getByRole('contentinfo');
    const header = screen.getByRole('heading', { name: /shop/i });
    const link = screen.getByRole('link', { name: /catalog/i });
    expect(footer).toBeVisible();
    expect(header).toBeVisible();
    expect(link).toBeVisible();
  });
});
