/* eslint-disable import/prefer-default-export */
export const getProducts = (state) => state.products;
export const getFilteredProducts = (state) => state.filteredProducts;
export const getFilterSize = (state) => state.filters.sizes;
export const getFilterColor = (state) => state.filters.color;
export const getFilterFabric = (state) => state.filters.fabric;
export const getCatalogProducts = (state) =>
  state.filteredProducts || state.products;
export const getFilterByCategory = (state) => state.filters.categories;
export const getSliderValues = (state) => state.sliderValues;
export const getCurrentPage = (state) => state.currentPage;
export const getPerPage = (state) => state.perPage;

export const pageCounter = (state) =>
  state.products ? Math.ceil(state.products.length / state.perPage) : 0;

export const sliceProductsForPagination = (state) => {
  const products = state.filteredProducts || state.products;
  return products
    ? products.slice(
        state.currentPage * state.perPage,
        state.currentPage * state.perPage + state.perPage
      )
    : [];
};
