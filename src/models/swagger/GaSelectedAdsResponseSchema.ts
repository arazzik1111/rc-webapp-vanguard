import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';

export type GaSelectedAdsResponseSchema = {
  status?: number;
  data?: GaAdGroupSchema;
  message?: string;
};
