let resetPassword = (email, token) => {
  console.log(email)
  const emailTemplate = {
    from: "noreply@gmail.com",
    to: email,
    subject: "Password reset for " + email,
    text:
      "Password Reset Link: " + "localhost:3000/" + "resetPassword/" + token,
  };
  return emailTemplate;
};

module.exports = { resetPassword };
