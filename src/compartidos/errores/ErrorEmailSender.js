function crearErrorEmailSender (message) {
  const error = new Error(message)
  error.type = 'ERROR_EMAIL_SENDER'
  return error
}

export { crearErrorEmailSender }