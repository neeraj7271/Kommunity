import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import FollowersCard from '../FollowersCard/FollowersCard';
import "./ProfileLeft.css";
import InfoCard from '../InfoCard/InfoCard';

function ProfileLeft() {
  return (
    <div className='profileLeft'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft;
