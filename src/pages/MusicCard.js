import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addSong from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favoritesSongs: [],
      loading: false,
    };
  }

  handleSongsFavotites = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { favoritesSongs, loading } = this.state;
    const { previewUrl, trackName, trackId } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
        </audio>
        <label htmlFor="favoriteMusic">
          Favorita
          <input
            id="favoriteMusic"
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="favorite"
            onChange={ this.handleSongsFavotites }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;