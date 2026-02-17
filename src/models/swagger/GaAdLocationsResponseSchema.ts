import { GaAdLocationsSchema } from '@models/swagger//GaAdLocationsSchema';

export type GaAdLocationsResponseSchema = {
  status?: number;
  data?: GaAdLocationsSchema;
  message?: string;
};
