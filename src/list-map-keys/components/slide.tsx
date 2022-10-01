import React, { Component, ReactNode } from "react";
import "./slide.css";
import { bodyStyling, headingFinalStyle } from "./slideStyling";
// import slideDeck from "./slideDeck";

type Props = {
  heading: string;
  page?: {
    current: number;
    total: number;
  };
  children: ReactNode;
  showDivider: boolean;
  showTotal: boolean;
};

class Slide extends Component<Props> {
  static defaultProps = {
    showDivider: true,
    showTotal: true,
  };

  render() {
    const { heading, page, showDivider, showTotal, children } = this.props;
    let current, total;

    if (page) {
      current = page.current;
      total = page.total;
    }

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
