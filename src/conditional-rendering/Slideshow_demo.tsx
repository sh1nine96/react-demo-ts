import React from "react";
import Slideshow from "./slideshow";
import Slide from "./components/slide";

import "./components/slide.css";

export default (
  <Slideshow initalActiveSlide={0}>
    <Slide
      heading="Styling in React"
      showDivider={false}
      showTotal={false}
      showContent={true}
    >
      <ul style={{ marginTop: "1em" }}>
        <li>You can provide style using CSS clasess</li>
        <li>You can provide inline styles using JS object</li>
      </ul>
    </Slide>
    <Slide
      heading="Components props"
      showDivider={true}
      showTotal={true}
      showContent
    >
      <p>
        Props are used to pass data to a component instance, in order to
        customize the UI. <br /> The children are also treated as prop.
      </p>
    </Slide>
    <Slide
      heading="Components state"
      showDivider={true}
      showTotal={false}
      showContent={false}
    >
      {
        // default is true if dont set any value}
      }
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, aperiam
        necessitatibus itaque accusamus quis cum quia ea cumque sequi fugiat
        incidunt a doloribus similique illum?
      </p>
    </Slide>
    <Slide heading="Last Page">
      <p>Thank you all. Do u have any questions to ask</p>
    </Slide>
  </Slideshow>
);
