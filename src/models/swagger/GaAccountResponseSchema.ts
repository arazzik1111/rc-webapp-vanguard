import { GaAccountSchema } from '@models/swagger//GaAccountSchema';

export type GaAccountResponseSchema = {
  status?: number;
  data?: GaAccountSchema;
  message?: string;
};
