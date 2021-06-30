import React from 'react';
import './Popular.scss';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Popular() {
  return (
    <div className="popular-container">
      <h2 className="new-in-title">Popular</h2>
      <div className="popular-block">
        <ul className="popular-list">
          <li className="popular-list__item1 popular-list-item">
            <img src="/images/popular/background.png" alt="" />
            <div className="popular-list-item__text-block">
              <p className="text-block__title">BEDROOM</p>
              <NavLink to="/catalog">
                <Button
                  variant="bordered"
                  className="text-block__button btn"
                  type="button"
                >
                  Shop
                </Button>
              </NavLink>
            </div>
          </li>
          <li className="popular-list__item2 popular-list-item">
            <img src="/images/popular/Rectangle 715 Copy 3.png" alt="" />
            <div className="popular-list-item__text-block">
              <p className="text-block__title">BATHROOM</p>
              <NavLink to="/catalog">
                <Button
                  variant="bordered"
                  className="text-block__button btn"
                  type="button"
                >
                  Shop
                </Button>
              </NavLink>
            </div>
          </li>
          <li className="popular-list__item3 popular-list-item">
            <img src="/images/popular/Rectangle 715 Copy 3 (1).png" alt="" />
            <div className="popular-list-item__text-block">
              <p className="text-block__title">BED LINEN</p>
              <NavLink to="/catalog">
                <Button
                  variant="bordered"
                  className="text-block__button btn"
                  type="button"
                >
                  Shop
                </Button>
              </NavLink>
            </div>
          </li>
          <li className="popular-list__item4 popular-list-item">
            <img src="/images/popular/Rectangle 715 Copy 3 (2).png" alt="" />
            <div className="popular-list-item__text-block">
              <p className="text-block__title">LOUNGEWEAR</p>
              <NavLink to="/catalog">
                <Button
                  variant="bordered"
                  className="text-block__button btn"
                  type="button"
                >
                  Shop
                </Button>
              </NavLink>
            </div>
          </li>
        </ul>
        <NavLink to="/catalog">
          <Button variant="bordered" className="see-all__btn btn" type="button">
            SEE ALL {' >'}
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
