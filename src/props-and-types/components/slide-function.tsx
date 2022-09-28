import React from "react";
import PropTypes from "prop-types";

import "./slide.css";

import { bodyStyling, headingFinalStyle } from "./slideStyling";

// type Props = {
//   heading: string;
//   page?: {
//     current: number;
//     total: number;
//   };
//   children: ReactNode;
// };

function Slide(
  {
    heading,
    page,
    children,
  }: {
    heading: string;
    page: {
      current: number;
      total: number;
    };
    children: React.ReactNode;
  } /* { heading, page, children }: Props*/
) {
  const slide = (
    <div className="slide">
      <span style={{ ...bodyStyling }}>
        {page?.current} / {page?.total}
      </span>
      <h1 style={headingFinalStyle}>{heading}</h1>
      <hr />
      <div className="body-text">
        {children}
        {/* <ul style={{ ...bodyStyling, ...listUnstyled, marginTop: "1.5em" }}>
          <li>we can style using CSS classes</li>
          <li>we can style using inline styling</li>
        </ul> */}
      </div>
    </div>
  );
  return slide;
}

Slide.propTypes = {
  heading: PropTypes.string.isRequired,
  page: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Slide;
