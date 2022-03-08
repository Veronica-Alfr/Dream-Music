import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      disabledButtonSearch: true,
      infosArtistOrBand: [],
      loading: false,
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
      loading: true,
    }, async () => {
      const infosAlbum = await searchAlbumsAPI(artist);
      this.setState({
        infosArtistOrBand: infosAlbum,
        loading: false,
      });
    });
  }

  // Ajuda de Rafael Oliveira para entender a requisição da API.

  render() {
    const { artist, disabledButtonSearch, infosArtistOrBand, loading } = this.state;
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
          { loading
            ? <Loading />
            : (
              <div>
                {
                  infosArtistOrBand.length > 0 && (
                    <div>
                      <p>
                        {`Resultado de álbuns de: ${artist}`}
                      </p>
                      <section className="album">
                        {
                          infosArtistOrBand.map(({ artistId, artistName, collectionName,
                            collectionPrice, releaseDate, trackCount, collectionId,
                            artworkUrl100,
                          }) => (
                            <section key={ collectionId }>
                              <p>
                                { artistId }
                              </p>
                              <p>
                                { artistName }
                              </p>
                              <p>
                                { collectionName }
                              </p>
                              <p>
                                { collectionPrice }
                              </p>
                              <img src={ artworkUrl100 } alt={ collectionName } />
                              <p>
                                { releaseDate }
                              </p>
                              <p>
                                { trackCount }
                              </p>
                            </section>
                          ))
                        }
                      </section>
                    </div>
                  )
                }
              </div>
            )}
        </div>
      </section>
    );
  }
}

// Ajuda de Vitu na monitoria do dia 08/03 com uma nova lógica para o Lint não reclamar.

export default Search;
