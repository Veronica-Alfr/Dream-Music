import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-album" />
      </section>
    );
  }
}

export default Album;
