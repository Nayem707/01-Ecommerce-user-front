import React from 'react';
import Slider from 'infinite-react-carousel';

const SliderCommon = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
      {children}
    </Slider>
  );
};

export default SliderCommon;
