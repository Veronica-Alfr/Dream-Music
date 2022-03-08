import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      disabledButton: true,
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
    console.log(name);
    console.log(name.length);
    if (name.length > 2) this.setState({ disabledButton: false });
  };

  // Ajuda de Johnata Barreto e Danillo Gonçalves com o this.state e diminuição do if(R3).

  render() {
    const { name, disabledButton } = this.state;
    return (
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
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
