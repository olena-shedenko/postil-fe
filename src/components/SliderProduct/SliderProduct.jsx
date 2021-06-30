import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './SliderProduct.scss';
import PropTypes from 'prop-types';

export default function SliderProduct({ img }) {
  const settings = {
    customPaging(i) {
      return <img src={`${img}${i + 1}`} alt="beddings" />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: '',
    centerPadding: '20px',
  };

  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      {img.map((item) => {
        /* eslint no-console: 0 */
        console.log('item', item);
        return (
          <>
            <div className="slick-list image-wrapper">
              <img src={item} alt="beddings" className="image-wrapper__image" />
            </div>
            <div>
              <img src={item[1]} alt="beddings" />
            </div>
            <div>
              <img src={item[2]} alt="beddings" />
            </div>
            <div>
              <img src={item[3]} alt="beddings" />
            </div>
          </>
        );
      })}
    </Slider>
  );

  // // eslint-disable-next-line
  // <Slider {...settings}>
  //   {img.map(() => {
  //     return (
  //       <>
  //         <div className="slide__img-wrapper">
  //           <div> </div><img src={img[0]} alt="beddings" className="slide__img" /> </div>
  //         </div>
  //         <div className="slide__wrapper-small">
  //          <div> <img src={img[1]} alt="beddings" className="slide__img-small" /></div>
  //          <div> <img src={img[2]} alt="beddings" className="slide__img-small" /></div>
  //         <div>  <img src={img[3]} alt="beddings" className="slide__img-small" /></div>
  //         </div>
  //       </>
  //     );
  //   })}
  // </Slider>
}

// export default function SliderProduct({ img }) {
//   /* eslint no-console: 0 */
//   console.log(' img:', img);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     className: '',
//     variableWidth: true,
//   };

//
//       <div className="product__img-wrapper">
//         <img src={img[0]} alt="bed-sheets" className="product__img" />
//       </div>
//       <div className="product__wrapper-small">
//         <img src={img[1]} alt="beddings" className="product__img-small" />
//         <img src={img[2]} alt="beddings" className="product__img-small" />
//         <img src={img[3]} alt="beddings" className="product__img-small" />
//       </div>
//     </Slider>
//   );
// }

SliderProduct.propTypes = {
  img: PropTypes.instanceOf(Array).isRequired,
};
