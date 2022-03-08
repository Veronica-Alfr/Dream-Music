import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-favorites" />
      </section>
    );
  }
}

export default Favorites;
