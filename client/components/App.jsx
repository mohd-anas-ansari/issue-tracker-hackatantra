import React from 'react';
import '../assets/stylesheets/style.css';
import AdminLogin from './auth/AdminLogin';
import UserLogin from './auth/UserLogin';
import UserRegister from './auth/UserRegister';
import RaiseIssue from './issues/RaiseIssue';
import IssueFeed from './issues/IssuesFeed';
import SingleIssue from './issues/SingleIssue';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <AdminLogin /> */}
        {/* <UserLogin /> */}
        {/* <UserRegister /> */}
        <RaiseIssue />
        {/* <IssueFeed /> */}
        {/* <SingleIssue /> */}
      </>
    );
  }
}
export default App;
