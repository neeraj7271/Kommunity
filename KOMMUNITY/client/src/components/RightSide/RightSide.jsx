import React,{useState} from "react";
import "./RightSide.css";
import * as Unicons from "@iconscout/react-unicons";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img  src={Home} alt="homePng" style={{height: "25px", width: "27px"}} />
        <Unicons.UilSetting />
        <img src={Notification} alt="homePng" />
        <img src={Comment} alt="homePng" />
      </div>

      <TrendCard />
      <button className="button rs-button" onClick={()=> setModalOpened(true)}>
        Share
      </button>
      {/* don't put sharemodal inside the button it will not work because it is a individual component */}
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default RightSide;
