import React, { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode; // react element doesn't accept string as element, so ReactNode is better
};

const Button = ({ children }: Props) => {
  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("button click handler");
    console.log(event.target);
  };
  return <button onClick={clickHandler}>{children}</button>;
};

export default Button;
