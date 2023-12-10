import React, { useState } from "react";
import "./InfoCard.css";
import * as Unicons from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <Unicons.UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Delhi</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>CodeHelp</span>
      </div>

      <button className="button info-logout-button">Logout</button>
    </div>
  );
}

export default InfoCard;
