import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';

export default function SimpleSlider() {
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
          <img
            src="https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img
            src="https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegKXJYJ3NU_vaps3xU0J7Hj8AFs_Bp4TIFA&usqp=CAU"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Forange-kitten-955480082-2000.jpg"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img
            src="https://i.guim.co.uk/img/media/c9b0aad22638133aa06cd68347bed2390b555e63/0_477_2945_1767/master/2945.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=97bf92d90f51da7067d00f8156512925"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
      <div className="">
        <div className="slider__img-wrapper">
          <img
            src="https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/cat-behaviour.jpg"
            alt="heart"
            className="slider__img"
          />
        </div>
      </div>
    </Slider>
  );
}
