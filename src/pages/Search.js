import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <section>
        <Header />
        <div data-testid="page-search" />
      </section>
    );
  }
}

export default Search;
