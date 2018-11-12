import React, { Component } from 'react';
import InputBox from './inputbox';

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "rakesh",
      email: '',
      password: '',
      obj: {
        uemail: 'abc@123@gmail.com',
        upassword: 12345
      }
    }
  }
  handleChange = (e, type) => {

  }
  render() {
    return (
      <div>
        <h2>Login Form</h2><br />
        Email Id:<input type={"text"} placeholder={"Email id"} value={this.state.email} onChange={(e) => this.handleChange(e, "email")} /><br /><br />
        Password: <input type="password" placeholder={"Password"} value={this.state.password} onChange={(e) => this.handleChange(e, "password")} />

      </div>
    )
  }
}

export default Login
