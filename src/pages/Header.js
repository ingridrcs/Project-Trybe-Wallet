import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    // console.log(expenses);
    const soma = () => {
      let total = 0;
      if (expenses.length > 0) {
        expenses.forEach(({ value, exchangeRates, currency }) => {
          total += Number(value) * Number(exchangeRates[currency].ask);
        });
      }
      return total;
    };
    return (
      <div className="header">
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">
          {`Despesa Total: R$ ${soma().toFixed(2)}`}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
