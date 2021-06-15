import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('component Navbar', () => {
  it('should render properly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    const navbar = screen.getByTestId('logo');
    expect(navbar).toBeVisible();
  });

  it('should render properly headers', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    const catalog = screen.getByTestId('catalog');
    expect(catalog).toBeVisible();
  });
  it('should render properly input field', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    const input = screen.getByTestId('search');
    expect(input).toBeVisible();
  });
});
