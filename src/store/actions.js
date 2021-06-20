/* eslint-disable import/prefer-default-export */
import {
  SET_PRODUCTS,
  FILTERED_PRODUCTS,
  CLEAR_FILTERED_PRODUCTS,
  FILTER_SIZE,
  FILTER_COLOR,
  FILTER_FABRIC,
  FILTER_CATALOG,
  FILTER_BY_CATEGORY,
  CLEAR_CATEGORY,
  SET_SELECTED_OPTION,
  SET_MIN_SLIDER_VALUE,
  SET_MAX_SLIDER_VALUE,
  SET_CURRENT_PAGE,
  SET_PER_PAGE,
  SET_CART,
  TOGGLE_SHOW_FILTERS,
} from './types';

export const setProducts = (data) => {
  return { type: SET_PRODUCTS, payload: data };
};

export const filteredProducts = (data) => {
  return { type: FILTERED_PRODUCTS, payload: data };
};

export const clearFilteredProducts = () => {
  return { type: CLEAR_FILTERED_PRODUCTS };
};

export const filterSize = (data) => {
  return { type: FILTER_SIZE, payload: data };
};

export const filterColor = (data) => {
  return { type: FILTER_COLOR, payload: data };
};

export const filterFabric = (data) => {
  return { type: FILTER_FABRIC, payload: data };
};

export const filterCatalog = (data) => {
  return { type: FILTER_CATALOG, payload: data };
};

export const filterByCategory = (data) => {
  return { type: FILTER_BY_CATEGORY, payload: data };
};

export const clearCategory = () => {
  return { type: CLEAR_CATEGORY };
};

export const setSelectedOption = (data) => {
  return { type: SET_SELECTED_OPTION, payload: data };
};

export const setMinSliderValue = (data) => {
  return { type: SET_MIN_SLIDER_VALUE, payload: data };
};

export const setMaxSliderValue = (data) => {
  return { type: SET_MAX_SLIDER_VALUE, payload: data };
};

export const setCurrentPage = (data) => {
  return { type: SET_CURRENT_PAGE, payload: data };
};

export const setPerPage = (data) => {
  return { type: SET_PER_PAGE, payload: data };
};

export const setCart = (data) => {
  return { type: SET_CART, payload: data };
};

export const toggleShowFilters = (data) => {
  return { type: TOGGLE_SHOW_FILTERS, payload: data };
};
