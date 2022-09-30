import React from "react";
import Slideshow from "./slideshow_class";
import Slide from "./components/slide-class";

import "./components/slide.css";

export default (
  <Slideshow initalActiveSlide={1}>
    <Slide heading="Styling in React">
      <ul style={{ marginTop: "1em" }}>
        <li>You can provide style using CSS clasess</li>
        <li>You can provide inline styles using JS object</li>
      </ul>
    </Slide>
    <Slide heading="Components props">
      <p>
        Props are used to pass data to a component instance, in order to
        customize the UI. <br /> The children are also treated as prop.
      </p>
    </Slide>
  </Slideshow>
);
