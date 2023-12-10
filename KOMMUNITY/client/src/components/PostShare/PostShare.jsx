import { useRef, useState } from "react";
//useState, useRef are hooks that will help to options work
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import * as Unicons from "@iconscout/react-unicons";

function PostShare() {
  // it is for working of the options
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    <div className="postShare">
      <img src={ProfileImage} alt="Profile" />
      <div>
        <input type="text" placeholder="What's Happening"></input>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <Unicons.UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <Unicons.UilCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <Unicons.UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <Unicons.UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          {/* Hidden input to handle the upload feature of the post */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {/* it is similar to if statement */}
        {image && (
          <div className="previewImage">
            <Unicons.UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="img" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
