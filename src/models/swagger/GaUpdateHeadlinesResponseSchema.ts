import { GaAdGroupSchema } from '@models/swagger//GaAdGroupSchema';
import { GaAdGroupValidationErrorsSchema } from '@models/swagger//GaAdGroupValidationErrorsSchema';

export type GaUpdateHeadlinesResponseSchema = {
  status?: number;
  data?: GaAdGroupSchema | GaAdGroupValidationErrorsSchema;
  message?: string;
};
