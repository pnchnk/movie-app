import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { IGenresSliderProps } from './type';

import Button from '../UI/Button';
import './styles.scss';

const GenresSlider: FC<IGenresSliderProps> = ({ className, item }) => {
  const settings = {
    centerMode: false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    className: `genres-slider ${className}`,
    // responsive: [
    //   {
    //     breakpoint: 1600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    // ],
  };

  return (
    <Slider {...settings}>
      {item?.map(sliderItem => {
        return (
          <div className="genres-slider-item">
            <div className="genres-slider-item__header">
              <div className="genres-slider-item__img">
                <img
                  src={require(`../../assets/images/${sliderItem.img}`)}
                  alt="genresSlide"
                />
              </div>
              <h2 className="genres-slider-item__title">
                {sliderItem.title}
              </h2>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default GenresSlider;
