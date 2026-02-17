import { GaAccountInvoiceDataSchema } from '@models/swagger//GaAccountInvoiceDataSchema';

export type GaAccountInvoiceDataResponseSchema = {
  status?: number;
  data?: GaAccountInvoiceDataSchema;
  message?: string;
};
