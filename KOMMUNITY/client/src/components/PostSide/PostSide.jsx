import React from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

function PostSide() {
    return(
        <div className="postSide">
           <PostShare />
           <Posts />
        </div>
    )
}

export default PostSide;