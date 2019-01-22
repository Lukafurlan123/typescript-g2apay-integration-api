import sha256 from 'sha256';

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
export function generatePaymentHash(orderId: string, amount: string, currency: string, secret: string) : string {
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
export function generateIPNHash(transactionId: string, userOrderId: string, amount: string, secret: string) : string {
  return sha256(`${transactionId}${userOrderId}${amount}${secret}`);
}