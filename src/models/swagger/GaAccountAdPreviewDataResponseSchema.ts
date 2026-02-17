import { GaAccountAdPreviewDataSchema } from '@models/swagger//GaAccountAdPreviewDataSchema';

export type GaAccountAdPreviewDataResponseSchema = {
  status?: number;
  data?: GaAccountAdPreviewDataSchema;
  message?: string;
};
