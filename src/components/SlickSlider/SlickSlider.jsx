/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import PropTypes from 'prop-types';

function NextArrow({ style, onClick }) {
  return (
    <div
      className="slick-arrow slick-next next-arrow"
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <img src="/images/arrows/next-arrow.svg" alt="arrow" />
    </div>
  );
}

function PrevArrow({ style, onClick }) {
  return (
    <div
      className="slick-arrow slick-next prev-arrow"
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <img src="/images/arrows/prev-arrow.svg" alt="arrow" />
    </div>
  );
}

export default function SimpleSlider({ categories }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: 'slider-wrapper',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      {categories.map(({ _id, imageUrls, name, currentPrice }) => {
        return (
          <Link key={_id} to={{ pathname: `/product/${_id}` }}>
            <div className="">
              <div className="slider__img-wrapper">
                <img
                  src={imageUrls[0]}
                  alt="beddings"
                  className="slider__img"
                />
                <div className="slider__info">
                  <h3 className="slider__name">{name}</h3>
                  <h5 className="slider__price">USD ${currentPrice}</h5>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </Slider>
  );
}

SimpleSlider.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

NextArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  style: null,
  onClick: null,
};

PrevArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  style: null,
  onClick: null,
};
