import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabledButton: true,
      loading: false,
      redirect: false,
    };
  }

  inputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => this.validationName());
  }

  validationName = () => {
    const { name } = this.state;
    const minValue = 3;
    this.setState({ disabledButton: name.length < minValue });
  };

  // Ajuda de Johnata Barreto e Danillo Gonçalves com o this.state e diminuição do if(R3).

  saveUserNameClick = async () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name });
      this.setState({ loading: false, redirect: true });
    });
  }

  // Ajuda de Danillo Gonçalves com a função do botão.
  // Ajuda de Imar Mendes com a condicional do disabled e assincronissidade.

  render() {
    const { name, disabledButton, loading, redirect } = this.state;
    return (
      <section>
        { loading
          ? <Loading />
          : (
            <div data-testid="page-login">
              <form>
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="name"
                  value={ name }
                  onChange={ this.inputChange }
                />
                <button
                  data-testid="login-submit-button"
                  type="button"
                  name="btn"
                  disabled={ disabledButton }
                  onClick={ this.saveUserNameClick }
                >
                  Entrar
                </button>
              </form>
            </div>
          )}
        {
          redirect && <Redirect to="/search" />
        }
      </section>
    );
  }
}

// Ajuda de Imar Mendes para entender a condição com Redirect.

export default Login;
