import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      contentApi: [],
      collectionInfo: {},
      // saveArtistOrBand: '',
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props; // observar match params -> visualização do código de Imar Mendes.
    this.setState({
      loading: true,
    }, async () => {
      const album = await getMusics(id);
      const musics = album.filter(({ kind }) => kind === 'song');
      this.setState({
        contentApi: musics,
        collectionInfo: album[0],
        loading: false,
      });
    });
  }

  render() {
    const { id, loading, contentApi, collectionInfo, /* nameAlbum, nameArtistOrBand,
      saveArtistOrBand */ } = this.state;
    return (
      <section>
        <Header />
        <div data-testid="page-album" />
        <p data-testid="artist-name">{collectionInfo.artistName}</p>
        <p data-testid="album-name">{collectionInfo.collectionName}</p>
        {
          contentApi.map((music) => (
            <MusicCard
              key={ music.trackId }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
            />
          ))
        }
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
