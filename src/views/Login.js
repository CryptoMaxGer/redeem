import React, { Component } from 'react'
import './Login.css'

import apiClient from "../Services/ApiClient";

export default class Login extends Component{
  
  state = {
    email: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const {
      email
    } = this.state;

    apiClient
    .login({
      email
    })
    .catch((err) =>{
      console.log(err)
    });
  };
  
  render(){
    
    return(
      <div className='loginBox'>
        <h1>Login</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="jhondoe@gmail.com"
            onChange={this.handleChange}
          />
          <br/>
          <input
            type='submit'
            value='Login'
          />
          </form>
      </div>
    )
  }
}