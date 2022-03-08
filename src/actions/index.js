// Coloque aqui suas actions
export const SEND_EMAIL = 'SEND_EMAIL';

const sendEmail = (email) => ({
  type: SEND_EMAIL,
  payload:
    email,
});

export default sendEmail;
