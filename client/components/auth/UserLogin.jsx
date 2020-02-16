import React, { Component } from 'react';
import validator from 'validator';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUserLogin = e => {
    e.preventDefault();

    const userCredentials = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!userCredentials.email || !userCredentials.password) {
      return alert('Please enter all credentials');
    }

    if (!validator.isEmail(userCredentials.email)) {
      return alert('Please enter valid email');
    }

    if (userCredentials.password.length < 6) {
      return alert('Please enter valid password');
    }

    fetch('http://localhost:3000/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(user => {
        // localStorage.setItem('token', user.token);
        console.log(user, 'user logged in');
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className='form_section'>
        <div className='container form_wrapper'>
          <h3 className='form_heading'>Log In</h3>

          <form className='login_from'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='user_info'
              onChange={this.handleChange}
              value={email}
            />
            <input
              type='password'
              name='password'
              className='user_info'
              placeholder='Password'
              onChange={this.handleChange}
              value={password}
            />
            <input
              type='submit'
              className='submit_btn'
              value='Submit'
              onClick={this.handleUserLogin}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default UserLogin;
