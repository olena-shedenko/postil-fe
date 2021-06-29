import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderProduct.scss';
import PropTypes from 'prop-types';

export default function SliderProduct({ img }) {
  const settings = {
    customPaging(i) {
      return <img src={`${img}/abstract0${i + 1}`} alt="beddings" />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // eslint-disable-next-line
    <Slider {...settings}>
      {img.map(() => {
        return (
          <>
            <div className="slide__img-wrapper">
              <div className="slide__img">
                <img src={img[0]} alt="beddings" />
              </div>
              {/* <div className="slide__wrapper-small">
                <div className="slide__img-small">
                  <img src={img[1]} alt="beddings" />
                </div>
                <div className="slide__img-small">
                  <img src={img[2]} alt="beddings" />
                </div>
                <div className="slide__img-small">
                  <img src={img[3]} alt="beddings" />
                </div>
              </div> */}
            </div>
          </>
        );
      })}
    </Slider>
  );

  // return img.map(() => {
  //   return (
  //     // eslint-disable-next-line
  //     <Slider {...settings}>
  //       <div className="slide__img-wrapper">
  //         <img src={img[0]} alt="beddings" className="slide__img" />
  //       </div>
  //       <div className="slide__wrapper-small">
  //         <img src={img[1]} alt="beddings" className="slide__img-small" />
  //         {/* <img src={img[2]} alt="beddings" className="slide__img-small" />
  //         <img src={img[3]} alt="beddings" className="slide__img-small" /> */}
  //       </div>
  //     </Slider>
  //   );
  // });
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

//   return (
//     // eslint-disable-next-line
//     <Slider {...settings}>
//       {/* {img.map(({_id, imageUrls}) => {
//         return (

//         )
//       })} */}
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
