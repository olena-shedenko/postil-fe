import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CatalogItems from './CatalogItems';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('component CatalogItems', () => {
  const store = mockStore({
    items: {
      data: [
        {
          name: 'Violet White 100% Linen Bed Linen',
          _id: '60886f3c5f99d53dcff53a59',
          itemNo: '0003',
          currentPrice: 150,
          imageUrls: ['image1', 'image2'],
        },
        {
          name: 'Super Soft Sateen Dusty Pink Bed Linen',
          _id: '60886f3c5f99d53dcff53a59',
          itemNo: '0004',
          currentPrice: 170,
          imageUrls: ['image1', 'image2'],
        },
      ],
    },
  });
  it('should return some jsx', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CatalogItems />
        </Provider>
      </BrowserRouter>
    );
    const catalogLinks = screen.getAllByRole('link');
    const catalogImgs = screen.getAllByRole('img');
    const catalogHeadings = screen.getAllByRole('heading');
    const catalogButtons = screen.getAllByRole('button');
    catalogLinks.forEach((link) => expect(link).toBeVisible());
    catalogImgs.forEach((img) => expect(img).toBeVisible());
    catalogHeadings.forEach((heading) => expect(heading).toBeVisible());
    catalogButtons.forEach((button) => expect(button).toBeVisible());
  });
});
