export type GaAccountPaymentInfoSchema = {
  paymentType?: string;
  cardType?: string;
  expireMonth?: number;
  expireYear?: number;
  cardNumber?: string;
  bankCountry?: string;
  accountHolder?: string;
  iban?: string;
};
