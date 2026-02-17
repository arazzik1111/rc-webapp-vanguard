import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';

export type GaUpdateDescriptionsResponseSchema = {
  status?: number;
  data?: GaAdGroupSchema;
  message?: string;
};
