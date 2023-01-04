import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { HeroSlider, Popular } from '@/components';

import './styles.scss'

const Movies: FC = () => {

    const items = useAppSelector(state => state.movies.data.movies);
    const sliderItem = items.filter((_, i) => i < 1);
    const popularItems = items.filter((_, i) => i !== 0);
  

  return (
    <div className='movie-page'>
      <div className='page-container'>
        {
          sliderItem.map(item => {
            return (
              <HeroSlider className={'movie-page__slider'} item={item}/>
            )
          })
        }

        <Popular items={popularItems} classname="movie-page__popular"/>

      </div>

    </div>
  );
};

export default Movies;