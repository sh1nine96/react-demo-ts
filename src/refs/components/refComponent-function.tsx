import React, { ChangeEvent, FormEvent, useRef } from "react";
import { isExpressionWithTypeArguments } from "typescript";

type Props = {};

const RefComponent = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(inputRef.current?.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={inputRef} onChange={changeHandler} />
      <button>submit</button>
    </form>
  );
};

export default RefComponent;
