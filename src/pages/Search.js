import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      disabledButtonSearch: true,
      infosArtistOrBand: [],
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

  buttonSearchArtist = async () => {
    const { artist } = this.state;
    this.setState({
      artist: '',
      disabledButtonSearch: true,
    }, async () => {
      // const { response } = await searchAlbumsAPI();
      // await searchAlbumsAPI({ artist });
      const infosAlbum = await searchAlbumsAPI(artist);
      this.setState({
        infosArtistOrBand: infosAlbum,
      });
    });
  }

  render() {
    const { artist, disabledButtonSearch, infosArtistOrBand } = this.state;
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
        <div>
          {
            infosArtistOrBand.map(({ artistId, artistName, collectionName }) => (
              <p key={ artistId }>
                { artistName, collectionName }
              </p>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Search;
