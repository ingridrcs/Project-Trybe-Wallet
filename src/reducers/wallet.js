// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SEND_CURRENCY, SEND_EXPENSES } from '../actions';

const INITIAL_USER = {
  expenses: [],
  currencies: [],
};

const expenserReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
  case SEND_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SEND_CURRENCY:
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };
  default:
    return state;
  }
};
export default expenserReducer;
// Dentro de expenses possui colchetes pois queremos alterar expenses que é um array
