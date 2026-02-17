import { GaInsightsKeywordSchema } from '@models/swagger//GaInsightsKeywordSchema';

export type GaInsightsKeywordsSchema = {
  keyword_count?: number;
  offset?: number;
  limit?: number;
  keywords?: GaInsightsKeywordSchema[];
};
