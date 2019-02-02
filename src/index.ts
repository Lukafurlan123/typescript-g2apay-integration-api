import { generatePaymentHash, createPaymentRequest, generateIPNHash } from "./functions";
import { QUOTE_URL, MERCHANT_URL, REST_API } from './constants';

export const createPaymentHash = generatePaymentHash;
export const createIPNHash = generateIPNHash;
export const generatePaymentRequest = createPaymentRequest;

export const constants = {
  QUOTE_URL,
  MERCHANT_URL,
  REST_API,
};

export enum EnvironmentType {
  PRODUCTION = 'production',
  SANDBOX = 'sandbox',
} 