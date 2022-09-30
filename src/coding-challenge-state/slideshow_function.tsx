import React, { useState, cloneElement, ReactElement } from "react";

type Props = {
  children: ReactElement[];
};

type State = {
  activeSlide: number;
};

const Slideshow = ({ children }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const previous = () => {
    setActiveSlide((activeSlide) => Math.max(activeSlide - 1, 0));
  };

  const next = () => {
    setActiveSlide((activeSlide) =>
      Math.min(activeSlide + 1, children.length - 1)
    );
  };

  return (
    <>
      {cloneElement(children[activeSlide], {
        page: {
          current: activeSlide + 1,
          total: children.length,
        },
      })}
      ;
      <div style={{ float: "right" }}>
        <button onClick={previous}>previous</button>
        <button onClick={next}>next</button>
      </div>
    </>
  );
};

export default Slideshow;
