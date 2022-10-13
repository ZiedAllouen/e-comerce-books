import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tunisian Readers</span>
        </div>
        <div className="topRight">
     
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img  src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/272131029_1593066231037992_6985668240616161120_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=RCFNRL9hB1cAX-MhfVe&_nc_ht=scontent.ftun14-1.fna&oh=00_AT_6T-8XJtIqw-5LiUF9esflY55niS6UoOij8ja9jg5CRw&oe=628AB95C"
            alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
