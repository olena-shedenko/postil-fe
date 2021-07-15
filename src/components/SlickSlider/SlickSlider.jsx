import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import PropTypes from 'prop-types';

export default function SimpleSlider({ categories }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: '',
    variableWidth: true,
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
          <Link to={{ pathname: `/product/${_id}` }}>
            <div className="">
              <div className="slider__img-wrapper">
                <img
                  src={imageUrls[0]}
                  alt="beddings"
                  className="slider__img"
                />
              </div>
              <div className="slider__info">
                <h1 className="slider__name">{name}</h1>
                <h5 className="slider__price">USD ${currentPrice}</h5>
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
