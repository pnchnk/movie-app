import React, { FC } from 'react';

import { useAppSelector } from '@/store/hooks';

import { ReactComponent as ArrowIcon } from '@/assets/icons/next.svg';
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg';

import ContinueSlider from '@/components/ContinueSlider';
import TopRatedSlider from '@/components/TopRatedSlider';
import GenresSlider from '@/components/GenresSlider';


import './styles.scss';

const RightAside: FC = () => {

  const profile = useAppSelector(state => state.profile.data.profileData);
  const continueSlider =  useAppSelector(state => state.profile.data.continue);
  const topItems = useAppSelector(state => state.profile.data.top);
  const genres = useAppSelector(state => state.movies.data.genres);

  console.log(topItems)

  return (
    <aside className="right-aside">
      <div className="right-aside-header">
        <div className="right-aside-header__notification">
          <NotificationIcon />
        </div>
        <div className="right-aside-header__profile">
          {
            profile?.map(user => {
              return (
                <>
                  <span>{user.name}</span>
                  <ArrowIcon className="right-aside-header-arrow" />
                  <div className="right-aside-header__profile-picture">
                    <img src={require(`../../assets/images/${user.img}`)} alt="Profile picture" />
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className="right-aside-action">

        <div className="right-aside-action-continue">
          <div className="right-aside-action-continue__header">
            <span className='right-aside-action-continue__title'>Continue</span>
            <span className='right-aside-action-continue__more'>See More</span>
            <ArrowIcon className="right-aside-action-continue__more-next" />
          </div>
          <ContinueSlider item={continueSlider}/>
        </div>

        <div className="right-aside-action-top">
          <div className="right-aside-action-top__header">
            <span className='right-aside-action-top__title'>Top Rated</span>
            <span className='right-aside-action-top__more'>See More</span>
            <ArrowIcon className="right-aside-action-top__more-next" />
          </div>
              <TopRatedSlider item={topItems}/>       
        </div>

        <div className="right-aside-action-genres">
          <div className="right-aside-action-genres__header">
            <span className='right-aside-action-genres__title'>Genres</span>
            <span className='right-aside-action-genres__more'>See More</span>
            <ArrowIcon className="right-aside-action-genres__more-next" />
          </div>
          <GenresSlider item={genres}/>
        </div>
        
      </div>
    </aside>
  );
};

export default RightAside;
