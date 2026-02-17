import { GaInsightsKeywordsSchema } from '@models/swagger//GaInsightsKeywordsSchema';

export type GaInsightKeywordsResponseSchema = {
  status?: number;
  data?: GaInsightsKeywordsSchema;
  message?: string;
};
