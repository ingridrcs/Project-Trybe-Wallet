// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';
export const SEND_EXPENSES = 'SEND_EXPENSES';
export const SEND_CURRENCY = 'SEND_CURRENCY';

const sendEmail = (email) => ({
  type: SEND_EMAIL,
  payload:
    email,
});

export const setExpenses = (payload) => ({
  type: SEND_EXPENSES,
  payload,
});

export const setCurrency = (payload) => ({
  type: SEND_CURRENCY,
  payload,
});

export default sendEmail;
