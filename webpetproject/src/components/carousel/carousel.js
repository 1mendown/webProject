import React from 'react';
import Slider from 'react-slick';
import CarouselPhoto from './carouselPhoto';
import './carousel.css';

const Carousel = ({ navRef, sliderRef, bool }) => {
  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    className: 'slides',
    cssEase: 'linear'
  };

  return (
    <Slider
      {...settings}
      asNavFor={navRef}
      ref={slider => (sliderRef = slider)}
    >
      {bool
        ? CarouselPhoto.map(items => {
            return (
              <React.Fragment key={items.key}>
                <h1>{items.name}</h1>
                <p>{items.description}</p>
              </React.Fragment>
            );
          })
        : CarouselPhoto.map(items => {
            return (
              <React.Fragment key={items.key}>
                <img
                  width='100%'
                  height='400px'
                  src={items.pic}
                  alt={items.name}
                />
              </React.Fragment>
            );
          })}
    </Slider>
  );
};

export default Carousel;
