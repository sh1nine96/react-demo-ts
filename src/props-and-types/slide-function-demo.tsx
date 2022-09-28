import React from "react";
import Slide from "./components/slide-function";
import "./components/slide.css";
import { bodyStyling } from "../react-css/slideStyling";

import { listUnstyled } from "./components/slideStyling";

const el = (
  <>
    <Slide heading="How do we style in React?" page={{ current: 1, total: 2 }}>
      <ul style={{ ...bodyStyling, ...listUnstyled, marginTop: "1.5em" }}>
        <li>we can style using CSS classes</li>
        <li>we can style using inline styling</li>
      </ul>
    </Slide>
    <Slide heading="How difficult is React?" page={{ current: 2, total: 2 }}>
      <p style={{ ...bodyStyling }}>
        Props are the values used to customize the React component instance.
        Children are special props.
      </p>
    </Slide>
  </>
);

export default el;
