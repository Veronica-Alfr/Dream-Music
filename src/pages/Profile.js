import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-profile" />
      </section>
    );
  }
}

export default Profile;
