import React from 'react';
import './NewIn.scss';
import '../../index.scss';

export default function NewIn() {
  return (
    <div className="new-in-container">
      <h2 className="new-in-title">New In</h2>

      <div className="new-in-block">
        <ul className="new-in-list">
          <li className="new-in-list__item">
            <img src="/images/newIn/Background.png" alt="" />
            <p className="new-in-text__title">Cotton Dark Blue Bed Linen</p>
            <p className="new-in-text__parag">$280</p>
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (1).png" alt="" />
            <p className="new-in-text__title">Phistachio French Linen</p>
            <p className="new-in-text__parag">$220</p>
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (2).png" alt="" />
            <p className="new-in-text__title">Light Pink Bed Linen</p>
            <p className="new-in-text__parag">$250</p>
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (3).png" alt="" />
            <p className="new-in-text__title">French Dark Green Linen</p>
            <p className="new-in-text__parag">$270</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
