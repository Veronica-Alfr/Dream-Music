import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getMusics } from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      contentApi: [],
      // nameAlbum: '',
      // nameArtistOrBand: '',
      // saveArtistOrBand: '',
      loading: true,
    };
  }

  componentDidMount() { // a lógica pode ser inversa já que DidMount é após tudo que carregou.
    const { match: { params: { id } } } = this.props; // observar match params -> visualização do código de Imar Mendes.
    this.setState({
      loading: false,
    }, async () => {
      const album = await getMusics(id); // pq não é lido?
      this.setState({
        contentApi: album,
      });
    });
  }

  render() {
    const { id, loading, ontentApi, /* nameAlbum, nameArtistOrBand,
      saveArtistOrBand */ } = this.state;
    return (
      <section>
        <Header />
        <div data-testid="page-album" />
      </section>
    );
  }
}

Album.propTypes = { // procurando solução para propTypes de match.params...
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default Album;
