import React from "react";
import "./Posts.css";
import PostData from "../../Data/PostData";
import Post from "../Post/Post";

function Posts() {
    return(
        <div>
            {PostData.map((post, id)=>{
                return <Post data={post} id={id}/>
            })}
        </div>
    )
}

export default Posts;