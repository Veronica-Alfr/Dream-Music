import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-profile-edit" />
      </section>
    );
  }
}

export default ProfileEdit;
