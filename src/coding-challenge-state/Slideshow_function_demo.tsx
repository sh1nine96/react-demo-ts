import React from "react";
import Slideshow from "./slideshow_function";
import Slide from "./components/slide-function";

import "./components/slide.css";

export default (
  <Slideshow>
    <Slide heading="Quote 1">
      <ul style={{ marginTop: "1em" }}>
        <li>Quote 1 is here with honesty</li>
        {/* <li>You can provide inline styles using JS object</li> */}
      </ul>
    </Slide>
    <Slide heading="Quote 2">
      <p>
        Quote 2 is available on demand
        {/* customize the UI. <br /> The children are also treated as prop. */}
      </p>
    </Slide>
  </Slideshow>
);
