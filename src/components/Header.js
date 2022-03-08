import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

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
      <div>
        <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        <header data-testid="header-component">
          <h1>Teste Header</h1>
          {
            loading
              ? <Loading />
              : (
                <p data-testid="header-user-name">{name}</p>
              )
          }
        </header>
      </div>
    );
  }
}

export default Header;
