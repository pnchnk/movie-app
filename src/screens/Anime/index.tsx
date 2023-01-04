import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { HeroSlider, Popular } from '@/components';

import './styles.scss'

const Anime: FC = () => {

    const items = useAppSelector(state => state.movies.data.anime);
    const sliderItem = items.filter((_, i) => i < 1);
    const popularItems = items.filter((_, i) => i !== 0);
  

  return (
    <div className='anime-page'>
      <div className='page-container'>
        {
          sliderItem.map(item => {
            return (
              <HeroSlider className={'anime-page__slider'} item={item}/>
            )
          })
        }

        <Popular items={popularItems} classname="anime-page__popular"/>

      </div>

    </div>
  );
};

export default Anime;