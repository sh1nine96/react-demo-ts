import React, { cloneElement, Component, ReactElement } from "react";

type Props = {
  children: ReactElement[];
};

type State = {
  activeSlide: number;
};

class Slideshow extends Component<Props, State> {
  state = {
    activeSlide: 0,
  };

  previous = () => {
    this.setState((state) => {
      return {
        activeSlide: Math.max(state.activeSlide - 1, 0),
      };
    });
  };

  next = () => {
    this.setState((state) => {
      return {
        activeSlide: Math.min(
          state.activeSlide + 1,
          this.props.children.length - 1
        ),
      };
    });
  };

  render() {
    const { activeSlide } = this.state;
    const { children } = this.props;
    return (
      <>
        {cloneElement(children[activeSlide], {
          page: {
            current: activeSlide + 1,
            total: children.length,
          },
        })}

        <div style={{ float: "right" }}>
          <button onClick={this.previous}>previous</button>
          <button onClick={this.next}>next</button>
        </div>
      </>
    );
  }
}

export default Slideshow;
