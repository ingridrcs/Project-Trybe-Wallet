import React from 'react';
import Expense from './Expense';
import Header from './Header';
import Table from './Table';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <div>TrybeWallet</div>
        <Header />
        <Expense />
        <Table />
      </header>
    );
  }
}

export default Wallet;
