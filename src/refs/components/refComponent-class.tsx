import React, { ChangeEvent, Component, createRef, FormEvent } from "react";

type Props = {};
type State = {};

class RefComponent extends Component<Props, State> {
  inputRef = createRef<HTMLInputElement>();

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(this.inputRef.current?.value);
  };

  submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.inputRef.current?.focus();
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" ref={this.inputRef} onChange={this.changeHandler} />
        <button>Submit</button>
      </form>
    );
  }
}

export default RefComponent;
