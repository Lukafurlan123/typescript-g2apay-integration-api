export namespace Payment {
  /**
   * @param sku Unique item number
   * @param name Item name
   * @param amount Full price (quantity x price)
   * @param qty Quantity
   * @param extra Item optional description
   * @param type Item optional type
   * @param id Unique item ID in your system
   * @param price Single item price
   * @param url Item URL
   */
  export interface Item {
    sku: string,
    name: string,
    amount: number,
    qty: number,
    extra?: string,
    type?: string,
    id: string,
    price: number,
    url: string,
  }
  /**
   * @param firstname First name
   * @param lastname Last name
   * @param line_1 Billing address line 1
   * @param line_2 Billing address line 2(could be an empty string)
   * @param zip_code Billing zip code (max length: 15 characters)
   * @param city Billing city
   * @param company Company name(could be an empty string)
   * @param county Billing county/region
   * @param country Country code(format ISO 3166-1 alpha-2)
   */
  export interface Address {
    firstname: string,
    lastname: string,
    line_1: string,
    line_2?: string,
    zip_code: string,
    city: string,
    company?: string,
    county?: string,
    country: string,
  }
  /**
   * @param billing Array of billing address params
   * @param shipping Array of shipping address params
   */
  export interface Addresses {
    billing: Address[],
    shipping: Address[],
  }
  /**
   * @param api_hash Store API Hash
   * @param hash Calculated Hash
   * @param order_id Merchant order ID
   * @param amount Total order price
   * @param currency Currency (ISO 4217)
   * @param description Optional description
   * @param email Return e-mail
   * @param url_failure URL to redirect when payment fails
   * @param url_ok URL to redirect the payment is successful
   * @param cart_type Cart product type: physical or digital
   * @param items Array of payment items
   * @param addresses Array of addresses
   * @param process_payment Payment method or group to display (values: paypal_gateway, skrill or card)
   * @param customer_ip_adress Customer IPv4 address
   */
  export interface Payment {
    api_hash: string,
    hash: string,
    order_id: string,
    amount: string,
    currency: string,
    description?: string,
    email?: string,
    url_failure: string,
    url_ok: string,
    cart_type?: string,
    items: Item[],
    addresses?: Addresses[],
    process_payment?: string,
    customer_ip_adress: string,
  }
}