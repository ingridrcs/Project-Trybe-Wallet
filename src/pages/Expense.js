import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setExpenses } from '../actions';

class Expense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const URL_API = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL_API);
    const allCurrencies = await response.json();
    this.setState({
      exchangeRates: allCurrencies,
    });
    return allCurrencies;
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    const getCurrencies = this.getApi();
    event.preventDefault();
    const { allExpenses, expenses } = this.props;
    this.setState({
      id: expenses.length + 1,
      exchangeRates: getCurrencies,
    });
    allExpenses(this.state);
    console.log(allExpenses);
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { exchangeRates, method, value, description, tag, currency } = this.state;
    return (
      <form>
        <label htmlFor="price">
          Valor:
          <input
            id="price"
            name="value"
            type="number"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="discription"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {Object.keys(exchangeRates)
              .filter((iscurrency) => iscurrency !== 'USDT')
              .map((iscurrency) => (
                <option
                  value={ iscurrency }
                  data-testid={ iscurrency }
                  key={ iscurrency }
                >
                  { iscurrency }
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de Pagamento:
          <select
            id="payment"
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Categoria:
          <select
            name="tag"
            id="category"
            data-testid="tag-input"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          name="button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
Expense.propTypes = {
  allExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  allExpenses: (value) => dispatch(setExpenses(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Expense);

// Source:https://victorvhpg.github.io/2018/04/09/redux.html
//  Dúvidas solucionadas através da colaboração dos alunos: Allana, Laecio e Adriano.
