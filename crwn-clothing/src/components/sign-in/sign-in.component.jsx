import React from "react";
import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(`Event: ${value}`);
    console.log(`Name: ${name}`);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            value={email}
            label="email"
            required
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton>SignIn</CustomButton>
            <CustomButton isGoogleSigIn onClick={this.handleSignIn}>
              Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
