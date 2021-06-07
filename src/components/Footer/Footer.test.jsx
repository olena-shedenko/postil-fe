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
    expect(footer).toBeVisible();
  });

  it('should render properly headers', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const header = screen.getByRole('heading', { name: /shop/i });
    expect(header).toBeVisible();
  });
  it('should render properly links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const link = screen.getByRole('link', { name: /catalog/i });
    expect(link).toBeVisible();
  });
  it('should render properly input field', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeVisible();
  });
  it('should render properly button', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeVisible();
  });
});
