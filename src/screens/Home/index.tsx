import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { HeroSlider, Popular } from '@/components';

import "./styles.scss"

const Home: FC = () => {

  const items = useAppSelector(state => state.movies.data.series);
  const sliderItem = items.filter((_, i) => i < 1);
  const popularItems = items.filter((_, i) => i !== 0);

  console.log(sliderItem)

  return (
    <div className='home-page'>
      <div className='page-container'>
        {
          sliderItem.map(item => {
            return (
              <HeroSlider className={'home-page__slider'} item={item}/>
            )
          })
        }

        <Popular items={popularItems} classname="home-page__popular"/>

      </div>

    </div>
  );
};

export default Home;
