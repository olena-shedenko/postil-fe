/* eslint-disable import/prefer-default-export */
export const getProducts = (state) => state.items.data;
export const getFilteredProducts = (state) => state.filteredProducts;
export const getFilterSize = (state) => state.filters.sizes;
export const getFilterColor = (state) => state.filters.color;
export const getFilterFabric = (state) => state.filters.fabric;
export const getCatalogProducts = (state) =>
  state.filteredProducts || state.items.data;
export const getFilterByCategory = (state) => state.filters.categories;
export const getSliderValues = (state) => state.sliderValues;
export const getCurrentPage = (state) => state.currentPage;
export const getPerPage = (state) => state.perPage;

export const pageCounter = (state) =>
  state.items.data ? Math.ceil(state.items.data.length / state.perPage) : 0;

export const sliceProductsForPagination = (state) => {
  const products = state.filteredProducts || state.items.data;
  return products
    ? products.slice(
        state.currentPage * state.perPage,
        state.currentPage * state.perPage + state.perPage
      )
    : [];
};

export const getCart = (state) => state.cart;
