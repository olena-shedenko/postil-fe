import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { screen, render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
// import selectors from '../../store/selectors'
window.scrollTo = jest.fn();

describe('Pagination component', () => {
  const mockStore = configureMockStore([thunk]);
  const mockData = {
    items: {
      data: [{}, {}, {}, {}],
    },
    perPage: 2,
  };
  const store = mockStore(mockData);
  it('should render properly', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    const paginationList = screen.getByRole('list');
    const paginationListItems = screen.getAllByRole('listitem');
    const paginationButtons = screen.getAllByRole('button');
    expect(paginationList).toBeVisible();
    paginationListItems.forEach((listItem) => expect(listItem).toBeVisible());
    paginationButtons.forEach((button) => expect(button).toBeVisible());
  });
  it('should be clicked', () => {
    store.clearActions();
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    const btn = screen.getByRole('button', { name: /page 2/i });
    fireEvent.click(btn);
    expect(store.getActions()).toEqual([
      { type: 'SET_CURRENT_PAGE', payload: 1 },
    ]);
  });
});
