import React, { MouseEvent } from "react";
import Button from "./components/button";
import LoginForm from "./components/LoginForm";
import ListView, { Item } from "./components/ListView";

const items: Item[] = [
  {
    id: 1,
    name: "Iphone 12",
  },
  {
    id: 2,
    name: "Ipad Pro",
  },
  {
    id: 3,
    name: "MacBook Pro",
  },
];

const spacer = {
  margin: "4em",
};

const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
  console.log("button click handler");
  console.log(event.target);
};

export default (
  <>
    <div style={spacer}>
      <h2>Button</h2>
      <button onClick={clickHandler}>Click me</button>
    </div>
    <div style={spacer}>
      <h2>Button (function component)</h2>
      <Button>Click me as well</Button>
    </div>
    <div style={spacer}>
      <h2>Login Form (class component)</h2>
      <LoginForm />
    </div>
    <div style={spacer}>
      <h2>ListView (Passing arguements to event handler)</h2>
      <ListView items={items} />
    </div>
  </>
);
