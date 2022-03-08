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
    if (name.length > 2) this.setState({ disabledButton: false });
  };

  // Ajuda de Johnata Barreto e Danillo Gonçalves com o this.state e diminuição do if(R3).

  saveUserNameClick = async () => {
    const { name } = this.state;
    await createUser({ name });
    this.setState({ loading: true, redirect: true });
  }

  // Ajuda de Danillo Gonçalves com a função do botão.

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
