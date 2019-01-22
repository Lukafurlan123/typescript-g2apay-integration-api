import { G2APay } from "./interfaces";

/**
 * Sending POST request to this url will create
 * new transaction. It will return unique transaction
 * identifier.
 */
export const QUOTE_URL : G2APay.API.Enviroments = {
  production: 'https://checkout.pay.g2a.com/index/createQuote',
  sandbox: 'https://checkout.test.pay.g2a.com/index/createQuote',
}

export const MERCHANT_URL : G2APay.API.Enviroments = {
  production: 'https://pay.g2a.com/',
  sandbox: 'https://www.test.pay.g2a.com/',
}

export const REST_API : G2APay.API.Enviroments = {
  production: 'https://pay.g2a.com/rest',
  sandbox: 'https://www.test.pay.g2a.com/rest',
}