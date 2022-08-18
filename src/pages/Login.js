import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import ContainerLogin from '../styles/Login';
import music from '../imagens/music01.svg';

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

  saveUserNameClick = async () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name });
      this.setState({ loading: false, redirect: true });
    });
  }

  render() {
    const { name, disabledButton, loading, redirect } = this.state;
    return (
      <ContainerLogin>
        { loading
          ? <Loading />
          : (
            <div data-testid="page-login" className="containerPageLogin">
              <h1>Dream Music</h1>
              <img src={ music } alt="A black man listening music" />
              <form>
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="name"
                  value={ name }
                  onChange={ this.inputChange }
                  placeholder="Username"
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
      </ContainerLogin>
    );
  }
}

export default Login;
