import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabledButton: true,
      loading: false,
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
    this.setState({ loading: true });
  }

  render() {
    const { name, disabledButton, loading } = this.state;
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
      </section>
    );
  }
}

export default Login;
