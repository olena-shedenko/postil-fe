/* eslint-disable import/prefer-default-export */
export const getProduct = (state) => state.items.data;
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

export const pageCounter = (state) => {
  const products = state.filteredProducts || state.items.data;
  return products ? Math.ceil(products.length / state.perPage) : 0;
};

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

// const sortAsc = (arr, field) => {
//   return arr.sort((a, b) => {
//     if (a[field] > b[field]) return 1;
//     if (b[field] > a[field]) return -1;
//     return 0;
//   });
// };

// const sortDesc = (arr, field) => {
//   return arr.sort((a, b) => {
//     if (a[field] > b[field]) return -1;
//     if (b[field] > a[field]) return 1;
//     return 0;
//   });
// };

// export const getCatalogItems = (state) => {
//   let products = state.items.data;
//   const { filters, sliderValues } = state;
//   const { categories, color, fabric, sizes, selectedOption } = filters;
//   const { min, max } = sliderValues;

//   if (sizes) {
//     products = products.filter((product) => product.sizes === sizes);
//   }

//   if (color) {
//     products = products.filter((product) => product.color === color);
//   }

//   if (fabric) {
//     products = products.filter((product) => product.fabric === fabric);
//   }

//   if (categories) {
//     products = products.filter((product) => product.categories === categories);
//   }

//   if (selectedOption && selectedOption === 'low-to-high') {
//     products = sortAsc([...products], 'currentPrice');
//   }

//   if (min && max)
//     products = products.filter((item) => {
//       return item.currentPrice >= min && item.currentPrice <= max;
//     });

//   if (selectedOption && selectedOption === 'high-to-low') {
//     products = sortDesc([...products], 'currentPrice');
//   }
//   return products;
// };
