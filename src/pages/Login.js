import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sendEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Source: validação do email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  // https://stackoverflow.com/questions/10492533/whats-the-best-way-to-escape-this-string-ba-z0-9-a-z0-9-a-z2
  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }), () => {
      const { email, password } = this.state;
      const minCharacter = 6;
      const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const validation = (
        password.length >= minCharacter && checkEmail.test(email));
      this.setState({ isDisabled: !validation });
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { userLogin, history } = this.props;
    const { email } = this.state;
    userLogin(email);
    history.push('/carteira');
  }

  render() {
    const { isDisabled, email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              value={ email }
              data-testid="email-input"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  userLogin: (value) => dispatch(sendEmail(value)),
});
export default connect(null, mapDispatchToProps)(Login);
