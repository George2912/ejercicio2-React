import React from "react";

import Icon from "./icon";

import icon1 from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import icon2 from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";
import icon3 from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";
import icon4 from "../icons/iconfinder_ic_home_48px_3669170.png";

export function Sidebar(props) {
  return (
    <div className="sidebar">
      <Icon iconUrl={icon1} />
      <Icon iconUrl={icon2} />
      <Icon iconUrl={icon3} />
      <Icon iconUrl={icon4} />
    </div>
  );
}
