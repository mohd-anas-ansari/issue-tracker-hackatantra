import React, { Component } from 'react';
import validator from 'validator';

class AdminLogin extends Component {
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

  handleAdminLogin = e => {
    e.preventDefault();

    const adminCredentials = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!adminCredentials.email || !adminCredentials.password) {
      return alert('Please enter all admin credentials');
    }

    if (!validator.isEmail(adminCredentials.email)) {
      return alert('Please enter valid admin email');
    }

    if (adminCredentials.password.length < 6) {
      return alert('Please enter valid admin password');
    }

    fetch('http://localhost:3000/api/v1/admin/login', {
      method: 'POST',
      body: JSON.stringify(adminCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(admin => {
        // localStorage.setItem('token', admin.token);
        console.log(admin, 'admin logged in');
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className='form_section'>
        <div className='container form_wrapper'>
          <h3 className='form_heading'>Admin Log In</h3>

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
              onClick={this.handleAdminLogin}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default AdminLogin;
