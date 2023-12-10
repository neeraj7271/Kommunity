import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

function ProfileCard() {
  //for keep track that we are on profile page
  const ProfilePage = false;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="Cover" />
        <img src={Profile} alt="Profile" />
      </div>

      <div className="profileName">
        <span>Neeraj Suman</span>
        <span>Software developer</span>
      </div>

      <div className="followStatus">
        <hr></hr>
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Following</span>
          </div>
          <div className="verticleLine"></div>
          <div className="follow">
            <span>7098</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="verticleLine"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr></hr>
      </div>
            {ProfilePage ? '': <span>My Profile</span>}
      {/* if profilePage exists the dont show and vice versa */}
      
    </div>
  );
}

export default ProfileCard;
