import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { HeroSlider, Popular } from '@/components';

import "./styles.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home: FC = () => {

  const items = useAppSelector(state => state.movies.data.series).filter((_, i) => i !== 0)

  return (
    <div className='home-page'>
      <div className='page-container'>
        <HeroSlider/>

        <Popular items={items} classname="home-page__popular"/>

      </div>

    </div>
  );
};

export default Home;
