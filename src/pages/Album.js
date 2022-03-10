import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      contentApi: [],
      collectionInfo: {},
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
    const { loading, contentApi, collectionInfo } = this.state;
    return (
      <section>
        <Header />
        <div data-testid="page-album">
          {loading
            ? <Loading />
            : (
              <>
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
              </>
            )}
        </div>
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
