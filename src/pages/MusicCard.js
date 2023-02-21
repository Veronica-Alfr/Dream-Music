import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import ContainerMusicCard from '../styles/MusicCard';
// import heart01 from '../imagens/heart01.svg';
// import heart02 from '../imagens/heart02.svg';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      loading: false,
    };
  }

  async componentDidMount() {
    const { trackId } = this.props;
    const getSongs = await getFavoriteSongs();
    const checkedFavorite = getSongs.some((song) => song.trackId === trackId);
    this.setState({
      checked: checkedFavorite,
    });
  }

  // Ajuda de Adelson Lima na lógica do checked.

  addSongsAndSave = async () => {
    const { music } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      await addSong(music);
      this.setState({
        loading: false,
        checked: true,
      });
    });
  }

  removeSongsAndSave = async () => {
    const { music } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      await removeSong(music);
      this.setState({
        loading: false,
        checked: false,
      });
    });
  }

  addOrRemove = ({ target }) => {
    console.log(target.checked);
    if (target.checked) {
      this.addSongsAndSave();
    } else {
      this.removeSongsAndSave();
    }
  }

  // Ajuda de Luá Octaviano no desenvolvimento da lógica no Requisito 8.
  // Ajuda de Danillo Gonçalves na lógica para criar uma função intermediária entre as funções
  // de adicionar e remover para o checked habilitar e desabilitar sem problemas.

  render() {
    const { checked, loading } = this.state;
    const { previewUrl, trackName, trackId, img, collectionName } = this.props;
    return (
      <div>
        {
          loading
            ? <Loading />
            : (
              <ContainerMusicCard>
                <img src={ img } alt={ collectionName } />
                <p>{trackName}</p>
                <div className="audioAndCheckbox">
                  <audio data-testid="audio-component" src={ previewUrl } controls>
                    <track kind="captions" />
                  </audio>
                  <label htmlFor="favoriteMusic">
                    <input
                      id="favoriteMusic"
                      data-testid={ `checkbox-music-${trackId}` }
                      type="checkbox"
                      name="favorite"
                      checked={ checked }
                      onChange={ this.addOrRemove }
                    />
                  </label>
                </div>
              </ContainerMusicCard>
            )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.objectOf(PropTypes.any).isRequired,
  img: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default MusicCard;
