import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { IContinueSliderProps } from './type';

import Button from '../UI/Button';
import './styles.scss';

const ContinueSlider: FC<IContinueSliderProps> = ({ className, item }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: `continue-slider ${className}`,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      {item?.map(sliderItem => {
        return (
      <div className="continue-slider__item continue-slider-item">
        <div className="continue-slider-item__header">
          <div className="continue-slider-item__img">
            <img
              src={require(`../../assets/images/${sliderItem.img}`)}
              alt="continueSlide"
            />
          </div>
          <h2 className="continue-slider-item__title">{sliderItem.title}</h2>
        </div>
        <div className="continue-slider-item__actions">
          <Button size={'drop'} color={'dark'} text={'Drop'} />
          <Button size={'small'} color={'primary'} text={'Watch'} />
        </div>
      </div>
        )
      })}     
    </Slider>
  );
};

export default ContinueSlider;
