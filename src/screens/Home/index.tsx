import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { HeroSlider, Popular } from '@/components';

import "./styles.scss"

const Home: FC = () => {

  const items = useAppSelector(state => state.movies.data.series).filter((_, i) => i !== 0)

  return (
    <div className='home-page'>
      <div className='page-container'>
        <HeroSlider className={'home-page__slider'}/>

        <Popular items={items} classname="home-page__popular"/>

      </div>

    </div>
  );
};

export default Home;
