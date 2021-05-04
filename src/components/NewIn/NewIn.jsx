import React from "react";
import "./NewIn.scss";
import "../../index.scss";

export default function NewIn() {
  return (
    <div>
      <h2 className="new-in-title">New In</h2>

      <div className="new-in-block">
        <ul className="new-in-list">
          <li className="new-in-list__item">
            <img src="/images/newIn/Background.png" alt="" />
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (1).png" alt="" />
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (2).png" alt="" />
          </li>
          <li className="new-in-list__item">
            <img src="/images/newIn/Background (3).png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
