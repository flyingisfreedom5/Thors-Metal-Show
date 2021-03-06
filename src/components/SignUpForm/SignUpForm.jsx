import React from 'react'
import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import "./SignUpForm.css";


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className='row'>
        <div className="form-container  col s12 m6 l8" style={{marginLeft:"350px"}} >
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="input-text">Name</label>
              <input className="input-text" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label className="input-text">Email</label>
              <input className="input-text" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className="input-text">Password</label>
              <input className="input-text" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className="input-text">Confirm</label>
              <input className="input-text" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button className="btn indigo accent-3" type="submit" disabled={disable}>SIGN UP &#129304;</button>
          </form>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
