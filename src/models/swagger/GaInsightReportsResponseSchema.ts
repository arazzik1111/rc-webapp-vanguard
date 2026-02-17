import { GaAdAccountInsightsSchema } from '@models/swagger//GaAdAccountInsightsSchema';

export type GaInsightReportsResponseSchema = {
  status?: number;
  data?: GaAdAccountInsightsSchema;
  message?: string;
};
