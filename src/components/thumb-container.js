import React from "react";

import Thumnail from "./video-thumbnail";
import Video1 from "../images/video1.jpg";
import Video2 from "../images/video2.jpg";
import Video3 from "../images/video3.jpg";
import Video4 from "../images/video4.jpg";
import Video5 from "../images/video5.jpg";
import Video6 from "../images/video6.jpg";
import Video7 from "../images/video7.jpg";
import Video8 from "../images/video8.jpg";

export function ThumbContainer() {
  return (
    <div className="thumb-container">
      <Thumnail image={Video1} />
      <Thumnail image={Video2} />
      <Thumnail image={Video3} />
      <Thumnail image={Video4} />
      <Thumnail image={Video5} />
      <Thumnail image={Video6} />
      <Thumnail image={Video7} />
      <Thumnail image={Video8} />
    </div>
  );
}
