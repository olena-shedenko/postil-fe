/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Slider.scss';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

export default function Slider() {
  const rad = document.getElementsByClassName('manual-btn');
  const nav = document.getElementsByClassName('nav-btn');
  let slideNumber = 0;

  const prevSlide = () => {
    for (let index = 0; index < rad.length; index += 1) {
      rad[index].classList.remove('active');
    }
    if (slideNumber < 1) {
      slideNumber = 2;
    } else {
      slideNumber -= 1;
    }
    const atrib = `radio${slideNumber + 1}`;
    nav[0].setAttribute('for', atrib);
    rad[slideNumber].classList.add('active');
  };

  const nextSlide = () => {
    for (let index = 0; index < rad.length; index += 1) {
      rad[index].classList.remove('active');
    }
    if (slideNumber > 1) {
      slideNumber = 0;
    } else {
      slideNumber += 1;
    }
    const atrib = `radio${slideNumber + 1}`;
    nav[1].setAttribute('for', atrib);
    rad[slideNumber].classList.add('active');
  };

  const changeSlide = (e) => {
    for (let a = 0; a < rad.length; a += 1) {
      rad[a].classList.remove('active');
      slideNumber = a;
    }
    e.target.className = 'manual-btn active';
  };

  return (
    <div className="slider-container">
      <div className="slide-div">
        <div className="nav-btns">
          <label className="nav-btn" htmlFor="radio1" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="37"
              viewBox="0 0 20 37"
              fill="none"
            >
              <path
                d="M19 1L2.47496 17.066C1.66717 17.8514 1.66717 19.1486 2.47496 19.934L19 36"
                stroke="#5C5E60"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" />
          </label>
          <label className="nav-btn" htmlFor="radio2" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="37"
              viewBox="0 0 20 37"
              fill="none"
            >
              <path
                d="M1 1L17.525 17.066C18.3328 17.8514 18.3328 19.1486 17.525 19.934L1 36"
                stroke="#5C5E60"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" />
          </label>
        </div>
        <div className="slider">
          <div className="slides">
            <input
              type="radio"
              name="radio-btn"
              id="radio1"
              className="radio1"
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio2"
              className="radio2"
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio3"
              className="radio3"
            />

            <div className="slide first">
              <img src="/images/slider/firstimg.png" alt="img" />
              <h3 className="slide-title">
                <span>OCEAN COLLECTION</span>
              </h3>
              <p className="slide-parag">
                <span>
                  This is the luxury bedding set with absolutely everything in
                  it,
                </span>
                <br />
                <span>at a price that wont keep you up at night.</span>
              </p>
              <NavLink to="/catalog">
                <Button className="slide-button" type="button" variant="light">
                  SHOP NEW ARRIVALS
                </Button>
              </NavLink>
            </div>

            <div className="slide">
              <img src="/images/slider/seconimg.png" alt="" />
              <h3 className="slide-title">
                <span>SUBSCRIBE NOW AND GET 15% OFF</span>
                <br />
                <span>ON YOUR FIRST ORDER</span>
              </h3>
              <NavLink to="/catalog">
                <Button className="slide-button" type="button" variant="light">
                  SHOP NEW ARRIVALS
                </Button>
              </NavLink>
            </div>
            <div className="slide">
              <img src="/images/slider/thirdimg.png" alt="" />
              <h3 className="slide-title">
                <span>UP TO 30% OFF</span>
                <br />
                <span>ON YOUR FAVOURITE FRENCH LINEN</span>
              </h3>
              <NavLink to="/catalog">
                <Button className="slide-button" type="button" variant="light">
                  SHOP NEW ARRIVALS
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="navigation-manual">
            <label
              htmlFor="radio1"
              className="manual-btn active"
              onClick={changeSlide}
            >
              <input type="radio" />
            </label>
            <label
              htmlFor="radio2"
              className="manual-btn"
              onClick={changeSlide}
            >
              <input type="radio" />
            </label>
            <label
              htmlFor="radio3"
              className="manual-btn"
              onClick={changeSlide}
            >
              <input type="radio" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
