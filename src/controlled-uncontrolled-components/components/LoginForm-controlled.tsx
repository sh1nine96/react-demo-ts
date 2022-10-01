import React, { Component, createRef } from "react";

type Props = {};
type State = {
  email: string;
  password: string;
};

class LoginForm extends Component<Props, State> {
  // emailRef = createRef<HTMLInputElement>();
  // passwordRef = createRef<HTMLInputElement>();

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  };

  state = {
    email: "hello@test.com",
    password: "",
  };

  updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // ref={this.emailRef}
            value={email}
            onChange={this.updateValue}
          />
          {email}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // ref={this.passwordRef}
            value={password}
            onChange={this.updateValue}
          />
          {password}
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default LoginForm;
