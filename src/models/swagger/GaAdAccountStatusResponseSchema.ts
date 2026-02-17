import { GaAdAccountStatusSchema } from '@models/swagger//GaAdAccountStatusSchema';

export type GaAdAccountStatusResponseSchema = {
  status?: number;
  data?: GaAdAccountStatusSchema;
  message?: string;
};
