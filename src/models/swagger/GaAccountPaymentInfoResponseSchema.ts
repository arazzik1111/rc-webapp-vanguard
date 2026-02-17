import { GaAccountPaymentInfoSchema } from '@models/swagger//GaAccountPaymentInfoSchema';

export type GaAccountPaymentInfoResponseSchema = {
  status?: number;
  data?: GaAccountPaymentInfoSchema;
  message?: string;
};
