import React, { Component } from 'react';
import Header from '../components/Header';
import { getMusics } from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      contentApi: [],
      nameAlbum: '',
      nameArtistOrBand: '',
      saveArtistOrBand: '',
      loading: true,
    };
  }

  componentDidMount() { // a lógica pode ser inversa já que DidMount é após tudo que carregou.
    const { id } = this.state; // observar match params -> visualização do código de Imar Mendes.
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
    const { id, loading, nameAlbum, nameArtistOrBand,
      saveArtistOrBand, contentApi } = this.state;
    return (
      <section>
        <Header />
        <div data-testid="page-album" />
      </section>
    );
  }
}

export default Album;
