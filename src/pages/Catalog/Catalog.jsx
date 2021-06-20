/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Loader from 'react-loader-spinner';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Button from '../../components/Button/Button';
import CatalogItems from '../../components/CatalogItems/CatalogItems';
import Pagination from '../../components/Pagination/Pagination';
import RadioButtonsGroup from '../../components/RadioButtonsGroup/RadioButtonsGroup';
import './Catalog.scss';
import {
  getFilterSize,
  getFilterColor,
  getFilterFabric,
  getFilterByCategory,
  getSliderValues,
  getPerPage,
  getShowFilters,
  getItemsIsLoading,
  getFilteredProducts,
} from '../../store/selectors';
import { filterAndSortOperation } from '../../store/operations';
import {
  clearFilteredProducts,
  filterSize,
  filterColor,
  filterFabric,
  filterByCategory,
  clearCategory,
  setSelectedOption,
  setMinSliderValue,
  setMaxSliderValue,
  setPerPage,
  toggleShowFilters,
} from '../../store/actions';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const RangeSlider = createSliderWithTooltip(Slider.Range);

const Catalog = () => {
  const dispatch = useDispatch();
  const perPage = useSelector(getPerPage);
  const selected = useSelector(getFilterByCategory);
  const sliderValues = useSelector(getSliderValues);
  const showFilters = useSelector(getShowFilters);
  const sizeFilter = useSelector(getFilterSize);
  const colorFilter = useSelector(getFilterColor);
  const fabricFilter = useSelector(getFilterFabric);
  const isLoading = useSelector(getItemsIsLoading);
  const filteredProducts = useSelector(getFilteredProducts);
  const isDesktop = useMediaQuery({ query: '(min-width: 630px)' });

  return (
    <>
      <div className="catalog-container">
        <Breadcrumbs />
        <div className="catalog">
          <aside className="catalog-aside aside">
            <h3 className="aside__title">Catalog</h3>
            {/* ASIDE SECTION */}
            {!isDesktop && (
              <Button
                variant="light"
                className="aside-btn"
                onClick={(e) => {
                  dispatch(toggleShowFilters());
                  e.target.textContent = 'Hide filters';
                  if (showFilters) e.target.textContent = 'Show filters';
                }}
              >
                Show filters
              </Button>
            )}
            {(isDesktop || showFilters) && (
              <div className="aside-section-filters filters">
                <section className="aside-section">
                  <h4 className="aside-section__title">Price</h4>
                  <div className="range-slider-form">
                    <RangeSlider
                      className="aside-section__slider range-slider"
                      defaultValue={[sliderValues.min, sliderValues.max]}
                      value={[sliderValues.min, sliderValues.max]}
                      min={0}
                      max={300}
                      tipFormatter={(value) => `$${value}`}
                      onChange={(values) => {
                        dispatch(setMinSliderValue(values[0]));
                        dispatch(setMaxSliderValue(values[1]));
                        dispatch(filterAndSortOperation());
                      }}
                    />
                    <label htmlFor="price-range-min">
                      FROM
                      <input
                        data-testid="input-min"
                        id="price-range-min"
                        className="range-slider-input"
                        type="text"
                        value={`$${sliderValues.min}`}
                        onChange={(e) => {
                          let { value } = e.target;
                          value = value.slice(1);
                          dispatch(setMinSliderValue(+value));
                          dispatch(filterAndSortOperation());
                        }}
                      />
                    </label>
                    <label htmlFor="price-range-max">
                      TO
                      <input
                        data-testid="input-max"
                        id="price-range-max"
                        type="text"
                        className="range-slider-input"
                        value={`$${sliderValues.max}`}
                        onChange={(e) => {
                          let { value } = e.target;
                          value = value.slice(1);
                          dispatch(setMaxSliderValue(+value));
                          dispatch(filterAndSortOperation());
                        }}
                      />
                    </label>
                  </div>
                </section>
                <section className="aside-section">
                  <h4 className="aside-section__title">Size</h4>
                  <div className="aside-section__btns btns-group">
                    <RadioButtonsGroup
                      value={sizeFilter}
                      values={{
                        single: 'single',
                        double: 'double',
                        queen: 'queen',
                        king: 'king',
                      }}
                      name="size"
                      className="btns-group__btn"
                      onChange={(size) => {
                        dispatch(filterSize(size));
                        dispatch(filterAndSortOperation());
                      }}
                    />
                  </div>
                </section>
                <section className="aside-section">
                  <h4 className="aside-section__title">Color</h4>
                  <div className="aside-section__btns btns-group color-btns">
                    <RadioButtonsGroup
                      value={colorFilter}
                      values={{
                        red: '',
                        pink: '',
                        green: '',
                        blue: '',
                        white: '',
                        brown: '',
                        olive: '',
                        grey: '',
                        'ivory/natural/cream': '',
                      }}
                      name="color"
                      className="color-btns__btn"
                      isColored
                      onChange={(color) => {
                        dispatch(filterColor(color));
                        dispatch(filterAndSortOperation());
                      }}
                    />
                  </div>
                </section>
                <section className="aside-section">
                  <h4 className="aside-section__title">Fabric</h4>
                  <div className="aside-section__btns btns-group">
                    <RadioButtonsGroup
                      value={fabricFilter}
                      values={{
                        cotton: 'cotton',
                        linen: 'linen',
                        silk: 'silk',
                      }}
                      name="fabric"
                      className="btns-group__btn"
                      onChange={(fabric) => {
                        dispatch(filterFabric(fabric));
                        dispatch(filterAndSortOperation());
                      }}
                    />
                  </div>
                </section>
              </div>
            )}
          </aside>
          {/* END OF ASIDE SECTION */}
          {/* MAIN SECTION */}
          <div className="catalog-main">
            {(isDesktop || showFilters) && (
              <div className="catalog-main-btns main-btns">
                <Button
                  variant="light-bordered"
                  className={
                    !selected ? 'main-btns__btn selected' : 'main-btns__btn'
                  }
                  onClick={() => {
                    dispatch(clearFilteredProducts());
                    dispatch(clearCategory());
                  }}
                >
                  SHOP ALL
                </Button>
                <Button
                  variant="light-bordered"
                  className={
                    selected === 'bed-linen-sets'
                      ? 'main-btns__btn selected'
                      : 'main-btns__btn'
                  }
                  onClick={() => {
                    dispatch(filterByCategory('bed-linen-sets'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  bed linen sets
                </Button>
                <Button
                  variant="light-bordered"
                  className={
                    selected === 'duvet-covers'
                      ? 'main-btns__btn selected'
                      : 'main-btns__btn'
                  }
                  onClick={() => {
                    dispatch(filterByCategory('duvet-covers'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  duvet covers
                </Button>
                <Button
                  variant="light-bordered"
                  className={
                    selected === 'flat-sheets'
                      ? 'main-btns__btn selected'
                      : 'main-btns__btn'
                  }
                  onClick={() => {
                    dispatch(filterByCategory('flat-sheets'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  flat sheets
                </Button>
                <Button
                  variant="light-bordered"
                  className={
                    selected === 'pillowcases'
                      ? 'main-btns__btn selected'
                      : 'main-btns__btn'
                  }
                  onClick={() => {
                    dispatch(filterByCategory('pillowcases'));
                    dispatch(filterAndSortOperation());
                  }}
                >
                  pillowcases
                </Button>
              </div>
            )}
            <div className="catalog-main-select select">
              <select
                className="select-item right"
                defaultValue="Show"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  dispatch(setPerPage(value));
                }}
              >
                <option className="select-item__item" value="Show">
                  Show
                </option>
                <option className="select-item__item" value="18">
                  18
                </option>
                <option className="select-item__item" value="36">
                  36
                </option>
                <option className="select-item__item" value="all">
                  All
                </option>
              </select>
              <select
                className="select-item left"
                defaultValue="Sort by"
                onChange={(e) => {
                  const { value } = e.target;
                  dispatch(setSelectedOption(value));
                  dispatch(filterAndSortOperation());
                }}
              >
                <option className="select-item__item" value="sort-by">
                  Sort by
                </option>
                <option className="select-item__item" value="low-to-high">
                  Price: Low to High
                </option>
                <option className="select-item__item" value="high-to-low">
                  Price: High to low
                </option>
              </select>
            </div>
            {isLoading && (
              <Loader
                type="Puff"
                color="#acacac"
                height={80}
                width={80}
                className="is-loading"
              />
            )}
            {Array.isArray(filteredProducts) && !filteredProducts.length && (
              <div data-testid="filter-err">
                No items have been found. Please, try again
              </div>
            )}
            <CatalogItems />
          </div>
          {!perPage ? <></> : <Pagination data-testid="pagination" />}
        </div>
      </div>
    </>
  );
};

export default Catalog;
