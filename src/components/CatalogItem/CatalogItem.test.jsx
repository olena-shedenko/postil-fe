import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import CatalogItem from './CatalogItem';

jest.mock('axios');

const mockProduct = {
  name: 'Violet White 100% Linen Bed Linen',
  _id: '60886f3c5f99d53dcff53a59',
  itemNo: '0003',
  currentPrice: 150,
  imageUrls: 'image',
};

describe('component CatalogItem', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});
  sessionStorage.setItem('token', 'authtoken');

  it('should render properly', () => {
    render(
      <Router>
        <Provider store={store}>
          <CatalogItem
            id={mockProduct._id}
            name={mockProduct.name}
            img={mockProduct.imageUrls}
            currentPrice={mockProduct.currentPrice}
          />
        </Provider>
      </Router>
    );

    const catalogLink = screen.getByRole('link');
    const catalogImg = screen.getByRole('img');
    const catalogHeadings = screen.getAllByRole('heading', {
      name: /Violet White 100% Linen Bed Linen/i,
    });
    const catalogButton = screen.getByRole('button', {
      name: /buy now/i,
    });
    expect(catalogLink).toBeVisible();
    expect(catalogImg).toBeVisible();
    catalogHeadings.forEach((item) => expect(item).toBeVisible());
    expect(catalogButton).toBeVisible();
  });

  it('should add product to cart', async () => {
    axios.put = jest.fn().mockResolvedValue({
      data: [mockProduct],
    });

    store.clearActions();
    sessionStorage.setItem(
      'token',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTRmMDUwN2I4YzljMDAxNTRmOGZiOCIsImZpcnN0TmFtZSI6Ik9sZW5hIiwibGFzdE5hbWUiOiJTaGVkZW5rbyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyMjcxMzk1NCwiZXhwIjoxNjIyNzQ5OTU0fQ.inCnG4rSagFTM7isSmAdJykqAhFGh0OI98wAUyGChEo'
    );
    render(
      <Router>
        <Provider store={store}>
          <CatalogItem
            id={mockProduct._id}
            name={mockProduct.name}
            img={mockProduct.imageUrls}
            currentPrice={mockProduct.currentPrice}
          />
        </Provider>
      </Router>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /buy now/i,
      })
    );
    await Promise.resolve();

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      'https://postil-bedding.herokuapp.com/api/cart/60886f3c5f99d53dcff53a59',
      null,
      {
        headers: { Authorization: sessionStorage.getItem('token') },
      }
    );
    expect(store.getActions()).toEqual([
      { type: 'SET_CART', payload: [mockProduct] },
    ]);
  });
});
