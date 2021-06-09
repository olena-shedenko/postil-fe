import React from 'react';
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="info-block">
        <div className="info-block__image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutUs/postil.png`}
            alt="postil"
            className="company-image"
          />
        </div>
        <div className="info-block__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          consequatur debitis animi iusto commodi assumenda culpa. Quidem
          necessitatibus nulla autem iste, neque nobis recusandae quasi dicta,
          cumque ab atque aperiam ut praesentium facilis ipsam ad eveniet quo
          dolorem itaque officia?
        </div>
      </div>

      <div className="contact-info">
        <h3 className="contact-info__heading">You can reach to us via</h3>
        <a href="tel:+380938759922" className="contact-info__link">
          A phone call
        </a>
        <span>or</span>
        <a href="emailto:hello@gmail.com" className="contact-info__link">
          Email
        </a>
      </div>
    </div>
  );
}
