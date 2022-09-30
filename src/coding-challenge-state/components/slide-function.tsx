import React, { ReactNode } from "react";

import "./slide.css";

import { bodyStyling, headingFinalStyle, listUnstyled } from "./slideStyling";

type Props = {
  heading: string;
  page?: {
    current: number;
    total: number;
  };
  children: ReactNode;
};

function Slide({ heading, page, children }: Props) {
  const slide = (
    <div className="slide">
      <span style={{ ...bodyStyling, ...listUnstyled }}>
        {page?.current} / {page?.total}
      </span>
      <h1 style={headingFinalStyle}>{heading}</h1>
      <hr />
      <div className="body-text">{children}</div>
    </div>
  );
  return slide;
}

export default Slide;
