import React, {FC} from 'react'
import Slider from "react-slick"

import {IHeroSliderProps} from './type'

const HeroSlider: FC<IHeroSliderProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'hero-slider-dots',
    className: 'hero-slider',
  }
    
  return (
    <Slider {...settings}>
        {
            Array(3).fill(3).map(_=> {
                return (
                    <div className='hero-slider-item'>
                        <img src={require('../../assets/images/slide.jpg')} alt="HeroSlide" />
                    </div>
                )
            })
        }
    </Slider>
  )
}

export default HeroSlider;