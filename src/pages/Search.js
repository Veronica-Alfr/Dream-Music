import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      disabledButtonSearch: true,
    };
  }

  inputArtistChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => this.validationNameArtist());
  }

  validationNameArtist = () => {
    const { artist } = this.state;
    const minWords = 2;
    this.setState({ disabledButtonSearch: artist.length < minWords });
  };

  render() {
    const { artist, disabledButtonSearch } = this.state;
    return (
      <section>
        <Header />
        <div data-testid="page-search" />
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            name="artist"
            value={ artist }
            onChange={ this.inputArtistChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            name="btn"
            disabled={ disabledButtonSearch }
            onClick={ this.buttonSearchArtist }
          >
            Pesquisar
          </button>
        </form>
      </section>
    );
  }
}

export default Search;
