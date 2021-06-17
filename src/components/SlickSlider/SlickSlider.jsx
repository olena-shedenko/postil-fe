import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import PropTypes from 'prop-types';

export default function SimpleSlider({ img, name, currentPrice }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: '',
    variableWidth: true,
  };
  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={`${img[0]}`} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={img[0]} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={img[0]} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={img[0]} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={img[0]} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img src={img[0]} alt="heart" className="slider__img" />
        </div>
        <div className="slider__info">
          <h1 className="slider__name">{name}</h1>
          <h5 className="slider__price">USD ${currentPrice}</h5>
        </div>
      </div>
    </Slider>
  );
}

SimpleSlider.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};
