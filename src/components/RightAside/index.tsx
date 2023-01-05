import React, { FC } from 'react';

import './styles.scss';

import {ReactComponent as NotificationIcon} from "@/assets/icons/notification.svg";

import {ReactComponent as ArrowIcon} from "@/assets/icons/next.svg";

const RightAside: FC = () => {
  return (
    <aside className="right-aside">
      <div className="right-aside-header">
          <div className="right-aside-header__notification">
            <NotificationIcon/>
          </div>
          <div className="right-aside-header__profile">
            <span>Samantha</span>
            <ArrowIcon className='right-aside-header-arrow'/>
            <div className="right-aside-header__profile-picture">
              <img src={require("../../assets/images/profile.jpg")} alt="" />
            </div>
          </div>
      </div>
    </aside>
    );
};

export default RightAside;
