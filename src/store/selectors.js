/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
export const getProduct = (state) => state.items.data;
export const getProducts = (state) => state.items.data;
export const getFilteredProducts = (state) => state.filteredProducts;
export const getFilterSize = (state) => state.filters.sizes;
export const getFilterColor = (state) => state.filters.color;
export const getFilterFabric = (state) => state.filters.fabric;
export const getCatalogItems = (state) =>
  state.filteredProducts || state.items.data;
export const getFilterByCategory = (state) => state.filters.categories;
export const getSliderValues = (state) => state.sliderValues;
export const getCurrentPage = (state) => state.currentPage;
export const getPerPage = (state) => state.perPage;
export const getName = (state) => state.filters.name;

export const pageCounter = (state) => {
  const products = state.filteredProducts || state.items.data;
  return products ? Math.ceil(products.length / state.perPage) : 0;
};

export const catalogItemsSelector = (state) => {
  const { currentPage, perPage, filteredProducts, items, wishlist } = state;
  const wishlistIds = wishlist.data.map(({ _id }) => _id);
  const catalogItems = (filteredProducts || items.data).map((item) => ({
    ...item,
    inWishList: wishlistIds.indexOf(item._id) >= 0,
  }));
  return perPage
    ? catalogItems.slice(currentPage * perPage, currentPage * perPage + perPage)
    : catalogItems;
};

export const getCart = (state) => state.cart;
export const getShowFilters = (state) => state.showFilters;
export const getItemsIsLoading = (state) => state.items.isLoading;
export const getWishList = (state) => state.wishlist.data;

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
