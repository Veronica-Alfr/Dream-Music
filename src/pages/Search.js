import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import ContainerHeaderAndSearch, { ContainerSearch } from '../styles/Search';
import music03 from '../imagens/music03.svg';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      saveArtist: '',
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
      saveArtist: artist,
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
    const { artist, saveArtist, disabledButtonSearch,
      infosArtistOrBand, loading } = this.state;
    return (
      <ContainerHeaderAndSearch>
        <Header />
        <ContainerSearch>
          <form>
            <img src={ music03 } alt="Headphone" className='headphone'/>
            <input
              data-testid="search-artist-input"
              type="text"
              name="artist"
              value={ artist }
              onChange={ this.inputArtistChange }
            />
            <ImSearch
              data-testid="search-artist-button"
              className="search"
              type="button"
              name="btn"
              disabled={ disabledButtonSearch }
              onClick={ this.buttonSearchArtist }
            />
          </form>
        </ContainerSearch>
        <div>
          { loading
            ? <Loading />
            : (
              <ContainerSearch>
                {
                  infosArtistOrBand.length > 0 ? (
                    <div className="containerAlbum">
                      <p>
                        {`Resultado de álbuns de: ${saveArtist}`}
                      </p>
                      <section>
                        {
                          infosArtistOrBand.map(({ artistName, collectionName,
                            collectionId,
                            artworkUrl100,
                          }) => (
                            <Link
                              to={ `/album/${collectionId}` }
                              data-testid={ `link-to-album-${collectionId}` }
                              key={ collectionId }
                              >
                              <img src={ artworkUrl100 } alt={ collectionName } />
                              <p>
                                { artistName }
                              </p>
                              <p>
                                { collectionName }
                              </p>
                            </Link>
                          ))
                        }
                      </section>
                    </div>
                  )
                    : <p>Nenhum álbum foi encontrado</p>
                }
              </ContainerSearch>
            )}
        </div>
      </ContainerHeaderAndSearch>
    );
  }
}

// Ajuda de Vitu na monitoria do dia 08/03 com uma nova lógica para o Lint não reclamar.

export default Search;
