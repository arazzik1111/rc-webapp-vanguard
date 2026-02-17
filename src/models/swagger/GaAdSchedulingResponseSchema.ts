import { GaAdSchedulingSchema } from '@models/swagger//GaAdSchedulingSchema';

export type GaAdSchedulingResponseSchema = {
  status?: number;
  data?: GaAdSchedulingSchema;
  message?: string;
};
