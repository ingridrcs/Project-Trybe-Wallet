import React from 'react';

class Table extends React.Component {
  render() {
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
      </table>
    );
  }
}
export default Table;
// Source: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element
// Source: https://html5-tutorial.net/pt/343/tables/thead-tbody/#:~:text=O%20elemento%20TBODY%20estrutura%20todo,Try%20this%20example!
