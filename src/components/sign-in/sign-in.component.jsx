import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handelSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already Have an account</h2>
        <span>sign in with your email account</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handelChange}
            value={this.state.email}
            lable="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handelChange}
            value={this.state.password}
            lable="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
