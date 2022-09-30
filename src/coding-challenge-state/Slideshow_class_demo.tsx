import React from "react";
import Slideshow from "./slideshow_class";
import Slide from "./components/slide-class";

import "./components/slide.css";

export default (
  <Slideshow>
    <Slide heading="Quote 1">
      <ul style={{ marginTop: "1em" }}>
        <li>Honesty is best policy</li>
      </ul>
    </Slide>
    <Slide heading="Quote 2">
      <p>Dream big to achieve big</p>
    </Slide>
  </Slideshow>
);
