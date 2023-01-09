import React, {FC} from 'react'
import Slider from "react-slick"

import {IContinueSliderProps} from './type'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles.scss'
import Button from '../UI/Button';

const ContinueSlider: FC<IContinueSliderProps> = ({className, item}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: `continue-slider ${className}`,
  }
    
  return (
    <Slider {...settings}>
        
               
                    <div className='continue-slider__item continue-slider-item'>
                        <div className="continue-slider-item__header">
                            <div className="continue-slider-item__img">
                            <img src={require(`../../assets/images/wanda.jpg`)} alt="continueSlide" />
                            </div>
                            <h2 className='continue-slider-item__title'>WandaVision</h2>
                       </div>
                        <div className="continue-slider-item__actions">
                          <Button size={'drop'} color={'dark'} text={'Drop'}/>
                          <Button size={'small'} color={'primary'} text={'Watch'}/>
                        </div>
                    </div>

                    <div className='continue-slider__item continue-slider-item'>
                        <div className="continue-slider-item__header">
                            <div className="continue-slider-item__img">
                            <img src={require(`../../assets/images/harley.jpg`)} alt="continueSlide" />
                            </div>
                            <h2 className='continue-slider-item__title'>Harley Quinn </h2>
                       </div>
                        <div className="continue-slider-item__actions">
                          <Button size={'drop'} color={'dark'} text={'Drop'}/>
                          <Button size={'small'} color={'primary'} text={'Watch'}/>
                        </div>
                    </div>

                    <div className='continue-slider__item continue-slider-item'>
                        <div className="continue-slider-item__header">
                            <div className="continue-slider-item__img">
                            <img src={require(`../../assets/images/rick.jpg`)} alt="continueSlide" />
                            </div>
                            <h2 className='continue-slider-item__title'>Rick and Morty </h2>
                       </div>
                        <div className="continue-slider-item__actions">
                          <Button size={'drop'} color={'dark'} text={'Drop'}/>
                          <Button size={'small'} color={'primary'} text={'Watch'}/>
                        </div>
                    </div>
                
  
    </Slider>
  )
}

export default ContinueSlider;