import React, { Component } from 'react';

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUserRegister = e => {
    e.preventDefault();

    const userCredentials = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    fetch('http://localhost:3000/api/v1/user/register', {
      method: 'POST',
      body: JSON.stringify(userCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(user => {
        // localStorage.setItem('token', admin.token);
        console.log(user, 'user registered');
      });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <section className='form_section'>
        <div className='container form_wrapper'>
          <h3 className='form_heading'>Register</h3>

          <form className='login_from'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              className='user_info'
              onChange={this.handleChange}
              value={username}
            />

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
              onClick={this.handleUserRegister}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default UserRegister;
