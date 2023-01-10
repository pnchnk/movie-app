import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ITopRatedSliderProps } from './type';

import Button from '../UI/Button';
import './styles.scss';

const TopRatedSlider: FC<ITopRatedSliderProps> = ({ className, item }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: `top-slider ${className}`,
  };

  return (
    <Slider {...settings}>
      {item?.map(sliderItem => {
        return (
          <div className="top-slider__item top-slider-item">
            <div className="top-slider-item__header">
              <div className="top-slider-item__img">
                <img
                  src={require(`../../assets/images/${sliderItem?.img}`)}
                  alt="topSlide"
                />
              </div>
              <h2 className="top-slider-item__title">{sliderItem?.title}</h2>
            </div>
            <div className="top-slider-item__info">
              <div className="top-slider-item__description">
                <span>{sliderItem?.duration}</span>
                <span>{sliderItem?.genre}</span>
              </div>
              <div className="top-slider-item__actions">
                <Button size={'drop'} color={'filter'} />
                <Button size={'small'} color={'primary'} text={'Watch'} />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default TopRatedSlider;
