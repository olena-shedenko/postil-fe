import React from 'react';
import Slider from 'react-slick';
import './SliderProduct.scss';
import PropTypes from 'prop-types';

export default function SliderProduct({ img }) {
  const settings = {
    customPaging(i) {
      return (
        <img src={`${img[i]}`} alt="beddings" className="main-slider__thumb" />
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb dots-custom',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'main-slider',
  };

  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      {img.map((item) => {
        return (
          <div>
            <img src={item} alt="beddings" className="main-slider__image" />
          </div>
        );
      })}
    </Slider>
  );
}

SliderProduct.propTypes = {
  img: PropTypes.instanceOf(Array).isRequired,
};
