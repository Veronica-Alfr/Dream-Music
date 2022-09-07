import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';
import ContainerHeader from '../styles/Header';
import music02 from '../imagens/music02.svg'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState(
      async () => {
        const { name } = await getUser();
        this.setState({
          loading: false,
          name,
        });
      },
    );
  }

  // Ajuda de Imar Mendes na lógica dos states.

  render() {
    const { name, loading } = this.state;
    return (
      <ContainerHeader>
        <header data-testid="header-component">
          {/* {
            loading
              ? <Loading />
              : (
                <p data-testid="header-user-name">{`Welcome, ${name}!`}</p>
              )
          } */}
          <img src={ music02 } alt="Stripes images for sound effects" />
        </header>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </ContainerHeader>
    );
  }
}

export default Header;
