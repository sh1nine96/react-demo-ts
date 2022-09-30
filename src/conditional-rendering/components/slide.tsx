import React, { ReactNode } from "react";
// import PropTypes from "prop-types";

import "./slide.css";

import { bodyStyling, headingFinalStyle } from "./slideStyling";

type Props = {
  heading: string;
  page?: {
    current: number;
    total: number;
  };
  showDivider: boolean;
  showTotal: boolean;
  showContent: boolean;
  children: ReactNode;
};

class Slide extends React.Component<Props> {
  static defaultProps = {
    showDivider: true,
    showTotal: true,
    showContent: true,
  };
  render() {
    const { heading, page, showDivider, showTotal, showContent, children } =
      this.props;
    let current, total;

    if (page) {
      current = page.current;
      total = page.total;
    }

    // let dividerEl = null;
    // if (showDivider) {
    //   dividerEl = <hr />;
    // }
    const slide = (
      <div className="slide">
        {showTotal ? (
          <span style={{ ...bodyStyling }}>
            {current} / {total}
          </span>
        ) : (
          <span style={{ ...bodyStyling }}>{current}</span>
        )}
        <h1 style={headingFinalStyle}>{heading}</h1>
        {/* <hr /> {dividerEl} */}
        {/* we can use following way to evaluate conditional also inside jsx or tsx */}
        {showDivider && <hr />}
        <div className="body-text">{showContent && children}</div>
      </div>
    );
    return slide;
  }
}

// Slide.defaultProps = {

// }

export default Slide;
