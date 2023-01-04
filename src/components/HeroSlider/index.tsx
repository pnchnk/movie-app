import React, {FC} from 'react'
import Slider from "react-slick"

import {IHeroSliderProps} from './type'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Button from '../UI/Button';

const HeroSlider: FC<IHeroSliderProps> = ({className, item}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'hero-slider-dots',
    className: `hero-slider ${className}`,
  }
    
  return (
    <Slider {...settings}>
        {
            Array(3).fill(3).map(_=> {
                return (
                    <div className='hero-slider__item hero-slider-item'>
                        <h2 className='hero-slider-item__title'>{item.title}</h2>
                        <div className="hero-slider-item__img">
                          <img src={require(`../../assets/images/${item.img}`)} alt="HeroSlide" />
                        </div>
                        <div className="hero-slider-item__actions">
                          <Button size={'large'} color={'primary'} text={'Watch Now'}/>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
  )
}

export default HeroSlider;