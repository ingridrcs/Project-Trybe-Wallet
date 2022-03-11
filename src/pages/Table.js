import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        {expenses.map((item) => (
          <tbody key={ item.name }>
            <tr>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ Number(item.value).toFixed(2) }</td>
              <td>{ item.exchangeRates[item.currency].name }</td>
              <td>{ Number(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
              <td>
                {
                  Number(item.exchangeRates[item.currency].ask * item.value)
                    .toFixed(2)
                }
              </td>
              <td> Real</td>
            </tr>
          </tbody>
        ))}
        ;

      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
// Source: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element
// Source: https://html5-tutorial.net/pt/343/tables/thead-tbody/#:~:text=O%20elemento%20TBODY%20estrutura%20todo,Try%20this%20example!
// Source: https://www.guj.com.br/t/e-possivel-retornar-um-valor-float-com-2-casas-decimais/376353
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
