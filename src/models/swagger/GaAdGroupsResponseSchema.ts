import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';

export type GaAdGroupsResponseSchema = {
  status?: number;
  data?: GaAdGroupSchema[];
  message?: string;
};
