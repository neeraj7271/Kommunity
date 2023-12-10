import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from  "../../img/notlike.png";

function Post({data}) {
    return(
        <div className="post">
            <img src={data.img} alt="PostImage" />

            <div className="postReact">
                <img className="like" src={data.liked?Heart : NotLike} alt="reactions"></img>
                <img src={Comment} alt="reactions"></img>
                <img src={Share} alt="reactions"></img>
            </div>

            <span style={{color: "var(--grey)", fontSize: "12px"}}>{data.likes} Likes</span>

            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc} </span>
            </div>
        </div>
    )
}

export default Post;