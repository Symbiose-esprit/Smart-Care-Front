import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import aziiz from "./aziiz.png";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SmartCare</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={aziiz} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
