import React from 'react';
import '../assets/stylesheets/style.css';
import AdminLogin from './auth/AdminLogin';
import UserLogin from './auth/UserLogin';
import UserRegister from './auth/UserRegister';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <AdminLogin /> */}
        <UserLogin />
        {/* <UserRegister /> */}
      </>
    );
  }
}
export default App;
