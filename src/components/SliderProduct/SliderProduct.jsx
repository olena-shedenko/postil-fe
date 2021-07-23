/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import Slider from 'react-slick';
import './SliderProduct.scss';
import PropTypes from 'prop-types';

function PrevArrow({ style, onClick }) {
  return (
    <div
      className="slick-arrow slick-prev arrow-prev"
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <img src="/images/arrows/prev-arrow.svg" alt="arrow" />
    </div>
  );
}

function NextArrow({ style, onClick }) {
  return (
    <div
      className="slick-arrow slick-next arrow-next"
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <img src="/images/arrows/next-arrow.svg" alt="arrow" />
    </div>
  );
}

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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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

PrevArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  style: null,
  onClick: null,
};

NextArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  style: null,
  onClick: null,
};
