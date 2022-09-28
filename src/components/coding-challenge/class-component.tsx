import React, { Component, Fragment } from "react";

import "./slide.css";
import { bodyStyling, headingFinalStyle, listUnstyled } from "./slideStyling";

class ClassComponent extends Component {
  render(): React.ReactNode {
    const fEl = (
      <div className="slide">
        <h1 style={headingFinalStyle}>Styling in React</h1>
        <hr />
        <ul style={{ ...bodyStyling, ...listUnstyled }}>
          <li>we can style using CSS classes</li>
          <li>we can style using inline styling</li>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            officiis non minus aliquid molestiae sit. Velit excepturi quibusdam
            aliquam assumenda voluptatibus eius possimus laborum veniam.
          </p>
        </ul>
      </div>
    );
    return fEl;
  }
}

const el = (
  <Fragment>
    <ClassComponent />
    <ClassComponent />
    <ClassComponent />
  </Fragment>
);

export default el;
