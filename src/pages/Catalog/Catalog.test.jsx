import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Catalog from './Catalog';

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

describe('Catalog component', () => {
  beforeEach(() => jest.resetModules());
  const mockStore = configureMockStore([thunk]);
  const mockData = {
    items: {
      data: [
        {
          name: 'Violet White 100% Linen Bed Linen',
          _id: '60886f3c5f99d53dcff53a59',
          itemNo: '0003',
          currentPrice: 150,
          imageUrls: 'image',
        },
      ],
    },
    filters: {},
    sliderValues: {
      min: 10,
      max: 280,
    },
    perPage: null,
  };
  const store = mockStore(mockData);

  it('should render properly', () => {
    useMediaQuery.mockImplementation(() => true);
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const links = screen.getAllByRole('link');
    const headings = screen.getAllByRole('heading');
    const sliders = screen.getAllByRole('slider');
    const textboxes = screen.getAllByRole('textbox');
    const radioBtns = screen.getAllByRole('radio');
    const buttons = screen.getAllByRole('button');
    const options = screen.getAllByRole('option');
    const img = screen.getByRole('img');
    links.forEach((link) => expect(link).toBeVisible());
    headings.forEach((heading) => expect(heading).toBeVisible());
    sliders.forEach((slider) => expect(slider).toBeVisible());
    textboxes.forEach((textbox) => expect(textbox).toBeVisible());
    radioBtns.forEach((radioBtn) => expect(radioBtn).toBeVisible());
    buttons.forEach((button) => expect(button).toBeVisible());
    options.forEach((option) => expect(option).toBeVisible());
    expect(img).toBeVisible();
  });

  it('should dispatch actions via input min value', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const input = screen.getByTestId('input-min');
    fireEvent.change(input, { target: { value: '100' } });
    expect(store.getActions()).toEqual([
      { type: 'SET_MIN_SLIDER_VALUE', payload: 0 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch actions via input max value', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const input = screen.getByTestId('input-max');
    fireEvent.change(input, { target: { value: '200' } });
    expect(store.getActions()).toEqual([
      { type: 'SET_MAX_SLIDER_VALUE', payload: 0 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch actions via size radiobutton', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const radioBtns = screen.getAllByRole('radio');
    fireEvent.click(radioBtns[0], { target: { value: 'single' } });
    expect(store.getActions()).toEqual([
      { type: 'FILTER_SIZE', payload: 'single' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch actions via colored radiobutton', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const radioBtns = screen.getAllByRole('radio');
    fireEvent.click(radioBtns[4], { target: { value: 'red' } });
    expect(store.getActions()).toEqual([
      { type: 'FILTER_COLOR', payload: 'red' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch actions via fabric radiobutton', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const radioBtns = screen.getAllByRole('radio');
    fireEvent.click(radioBtns[13], { target: { value: 'cotton' } });
    expect(store.getActions()).toEqual([
      { type: 'FILTER_FABRIC', payload: 'cotton' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "bed linen sets" category button', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /bed linen sets/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'FILTER_BY_CATEGORY', payload: 'bed-linen-sets' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "duvet-covers" category button', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /duvet covers/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'FILTER_BY_CATEGORY', payload: 'duvet-covers' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "flat-sheets" category button', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /flat sheets/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'FILTER_BY_CATEGORY', payload: 'flat-sheets' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "pillowcases" category button', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /pillowcases/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'FILTER_BY_CATEGORY', payload: 'pillowcases' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "shop all" button', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /shop all/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'CLEAR_FILTERED_BY_VALUE' },
      { type: 'CLEAR_CATEGORY' },
    ]);
  });

  it('should dispatch actions via price dropdown select', () => {
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const options = screen.getAllByRole('combobox');
    fireEvent.change(options[1], { target: { value: 'low-to-high' } });
    expect(store.getActions()).toEqual([
      { type: 'SET_SELECTED_OPTION', payload: 'low-to-high' },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should dispatch action via "show" dropdown select', () => {
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const options = screen.getAllByRole('combobox');
    fireEvent.change(options[0], { target: { value: '36' } });
    expect(store.getActions()).toEqual([{ type: 'SET_PER_PAGE', payload: 36 }]);
  });

  it('should dispatch action via slider', () => {
    useMediaQuery.mockImplementation(() => true);
    store.clearActions();
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const slider = screen.getAllByRole('slider');
    fireEvent.mouseDown(slider[0]);
    expect(store.getActions()).toEqual([
      { type: 'SET_MIN_SLIDER_VALUE', payload: 0 },
      { type: 'SET_MAX_SLIDER_VALUE', payload: 280 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
      { type: 'SET_MIN_SLIDER_VALUE', payload: 0 },
      { type: 'SET_MAX_SLIDER_VALUE', payload: 280 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
    ]);
  });

  it('should add classname="selected" to "bed-linen-sets" button', () => {
    useMediaQuery.mockImplementation(() => true);
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {
        categories: 'bed-linen-sets',
      },
      sliderValues: {
        min: 10,
        max: 280,
      },
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /bed linen sets/i });
    expect(button).toHaveClass('main-btns__btn selected btn-light-bordered');
  });

  it('should add classname="selected" to "duvet-covers" button', () => {
    useMediaQuery.mockImplementation(() => true);
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {
        categories: 'duvet-covers',
      },
      sliderValues: {
        min: 10,
        max: 280,
      },
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /duvet covers/i });
    expect(button).toHaveClass('main-btns__btn selected btn-light-bordered');
  });

  it('should add classname="selected" to "flat-sheets" button', () => {
    useMediaQuery.mockImplementation(() => true);
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {
        categories: 'flat-sheets',
      },
      sliderValues: {
        min: 10,
        max: 280,
      },
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /flat sheets/i });
    expect(button).toHaveClass('main-btns__btn selected btn-light-bordered');
  });

  it('should add classname="selected" to "pillowcases" button', () => {
    useMediaQuery.mockImplementation(() => true);
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {
        categories: 'pillowcases',
      },
      sliderValues: {
        min: 10,
        max: 280,
      },
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /pillowcases/i });
    expect(button).toHaveClass('main-btns__btn selected btn-light-bordered');
  });

  it('should render pagination if perPage is in store', () => {
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {},
      sliderValues: {
        min: 10,
        max: 280,
      },
      perPage: 18,
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeVisible();
  });

  it('should dispatch action via "show/hide button"', () => {
    useMediaQuery.mockImplementation(() => false);
    render(
      <Router>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /show filters/i });
    fireEvent.click(button);
    expect(store.getActions()).toEqual([
      { type: 'SET_MIN_SLIDER_VALUE', payload: 0 },
      { type: 'SET_MAX_SLIDER_VALUE', payload: 280 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
      { type: 'SET_MIN_SLIDER_VALUE', payload: 0 },
      { type: 'SET_MAX_SLIDER_VALUE', payload: 280 },
      {
        type: 'FILTERED_PRODUCTS',
        payload: [
          {
            _id: '60886f3c5f99d53dcff53a59',
            currentPrice: 150,
            imageUrls: 'image',
            itemNo: '0003',
            name: 'Violet White 100% Linen Bed Linen',
          },
        ],
      },
      { type: 'TOGGLE_SHOW_FILTERS', payload: undefined },
    ]);
  });

  it('should have textContent "show filters" for "show/hide filters" button when showFilters in store is true', () => {
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {},
      sliderValues: {
        min: 10,
        max: 280,
      },
      showFilters: true,
    };
    const initialStore = mockStore(initialState);
    useMediaQuery.mockImplementation(() => false);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const button = screen.getByRole('button', { name: /show filters/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('Show filters');
  });

  it('should render loader when data is not loaded', () => {
    const initialState = {
      items: {
        data: [],
        isLoading: true,
      },
      filters: {},
    };

    const initialStore = mockStore(initialState);
    const { container } = render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );

    expect(container.querySelector('.is-loading')).toBeVisible();
  });

  it('should render filter error message if there are no filtered products in store', () => {
    const initialState = {
      items: {
        data: [
          {
            name: 'Violet White 100% Linen Bed Linen',
            _id: '60886f3c5f99d53dcff53a59',
            itemNo: '0003',
            currentPrice: 150,
            imageUrls: 'image',
          },
        ],
      },
      filters: {},
      sliderValues: {
        min: 10,
        max: 280,
      },
      filteredProducts: [],
    };
    const initialStore = mockStore(initialState);
    render(
      <Router>
        <Provider store={initialStore}>
          <Catalog />
        </Provider>
      </Router>
    );
    const filterErr = screen.getByTestId('filter-err');
    expect(filterErr).toBeVisible();
  });
});
