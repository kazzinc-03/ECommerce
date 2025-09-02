const paypal = require("@paypal/checkout-server-sdk");

const environment = new paypal.core.SandboxEnvironment(
  "ATviWuOeFrNeT-mOT5t5IlvcrAJDhMYky0HdON_-G3q-KDeCpcNUE3NjQFB04JxIrErCEnKNgKS0x-1a",
  "EFRGnScbgqMaMdtnVQJR2cZ-2HPBzoKFn06Cmr9d26rRAOAPy9D1gd4mNN-LEvNx19YEuWzRnYbCT6OM"
);

function client() {
  return new paypal.core.PayPalHttpClient(environment);
}

module.exports = client();
