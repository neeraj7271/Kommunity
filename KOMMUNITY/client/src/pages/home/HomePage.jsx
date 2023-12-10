import React from "react";
import ProfileSide from "../../components/profileside/ProfileSide";
import "./HomePage.css"
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

function Home() {
  return <div className="Home">
    <ProfileSide />
    <PostSide />
    <RightSide />
  </div>
}

export default Home;