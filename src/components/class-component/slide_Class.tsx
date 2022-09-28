import React, { Component, Fragment } from "react";

import "./slide.css";

import { bodyStyling, listUnstyled, headingFinalStyle } from "./slideStyling";

class Slide extends Component {
  render(): React.ReactNode {
    const slideEl = (
      <div className="slide">
        <h1 style={headingFinalStyle}>Styling in React</h1>
        <hr />
        <ul style={{ ...bodyStyling, ...listUnstyled }}>
          <li>we can style using CSS classes</li>
          <li>we can style using inline styling</li>
        </ul>
      </div>
    );
    return slideEl;
  }
}

const el = (
  <Fragment>
    <Slide />
    <Slide />
    {/* <Slide /> */}
  </Fragment>
);

export default el;
