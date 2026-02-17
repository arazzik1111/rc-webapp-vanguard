import { GaInsightsTaxesSchema } from '@models/swagger//GaInsightsTaxesSchema';

export type GaInsightTaxesResponseSchema = {
  status?: number;
  data?: GaInsightsTaxesSchema;
  message?: string;
};
