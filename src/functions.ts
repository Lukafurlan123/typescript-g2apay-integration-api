import sha256 from 'sha256';
import axios, { AxiosResponse } from 'axios';
import { Payment } from './interfaces';
import { EnvironmentType } from './enums';
import { QUOTE_URL } from './constants';

/**
 * Creates payment hash which is used for payment security. 
 * It is used specifically to avoid any tampering during
 * the payment transaction process.
 * 
 * @param orderId Merchant's order ID
 * @param amount Payment amount, rounded to 2 decimals
 * @param currency Currency
 * @param secret API Secret generated in merchant panel (Settings > Merchant)
 */
export async function generatePaymentHash(orderId: string, amount: string, currency: string, secret: string) : Promise<string> {
  return sha256(`${orderId}${amount}${currency}${secret}`);
}

/**
 * Each IPN has hash field which contains this hash. This
 * hash should be compared with hash generated in merchant
 * application to avoid fake IPN requests
 * 
 * @param transactionId G2A PAY payment transaction ID
 * @param userOrderId Merchant's order ID
 * @param amount Payment amount, rounded to 2 decimals
 * @param secret API Secret generated in merchant panel (Settings > Merchant)
 */
export async function generateIPNHash(transactionId: string, userOrderId: string, amount: string, secret: string) : Promise<string> {
  return sha256(`${transactionId}${userOrderId}${amount}${secret}`);
}

/**
 * Creates POST request to G2APay API and creates new transaction.
 * If everything is right, G2APay then returns transaction identifier
 * which is used to redirect user to payment page.
 * 
 * @param paymentData Payment data which is sent to G2APay via POST request
 * @param environment Specifies in which environment we are (production, sandbox)
 */
export async function createPaymentRequest(paymentData: Payment.PaymentRequest, environment: EnvironmentType) : Promise<string> {
  try {
    const response : AxiosResponse = await axios.post(QUOTE_URL[environment], paymentData);
    const responseData : Payment.PaymentResponse = response.data;
    return responseData.token;
  } catch {
    throw new Error("PAYMENT_CREATION_FAILED");
  }
}