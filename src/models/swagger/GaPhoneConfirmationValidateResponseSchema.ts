import { GaPhoneCodeValidationSchema } from '@models/swagger//GaPhoneCodeValidationSchema';

export type GaPhoneConfirmationValidateResponseSchema = {
  status?: number;
  data?: GaPhoneCodeValidationSchema;
  message?: string;
};
