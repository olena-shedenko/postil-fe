import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import PropTypes from 'prop-types';

export default function SliderProduct({ product }) {
  /* eslint no-console: 0 */
  console.log(' categories:', product);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: '',
    variableWidth: true,
  };

  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      {categories.map(({ _id, imageUrls }) => {
        return (
          <div key={_id} className="">
            <div className="slider__img-wrapper">
              <img src={imageUrls[0]} alt="beddings" className="slider__img" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

SimpleSlider.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};
