import React, { ReactNode } from "react";
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

class Slide extends React.Component {
  propTypes = {
    heading: PropTypes.string.isRequired,
    page: PropTypes.shape({
      current: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }),
    children: PropTypes.ReactNode.isRequired,
  };
  render() {
    const { heading, page, children } = this.props;
    const slide = (
      <div className="slide">
        <span style={{ ...bodyStyling }}>
          {page?.current} / {page?.total}
        </span>
        <h1 style={headingFinalStyle}>{heading}</h1>
        <hr />
        <div className="body-text">{children}</div>
      </div>
    );
    return slide;
  }
}

export default Slide;
