import { GaAccountKeywordResponseSchema } from '@models/swagger//GaAccountKeywordResponseSchema';

export type GaAccountKeywordsResponseSchema = {
  status?: number;
  data?: GaAccountKeywordResponseSchema;
  message?: string;
};
