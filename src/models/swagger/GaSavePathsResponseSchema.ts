import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';

export type GaSavePathsResponseSchema = {
  status?: number;
  data?: GaAdGroupSchema;
  message?: string;
};
