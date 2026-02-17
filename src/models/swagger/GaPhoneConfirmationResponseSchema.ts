import { GaPhoneConfirmationSchema } from '@models/swagger//GaPhoneConfirmationSchema';

export type GaPhoneConfirmationResponseSchema = {
  status?: number;
  data?: GaPhoneConfirmationSchema;
  message?: string;
};
