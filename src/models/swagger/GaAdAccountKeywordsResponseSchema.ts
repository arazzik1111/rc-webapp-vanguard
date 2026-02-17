import { GaAdAccountKeywordsSchema } from '@models/swagger//GaAdAccountKeywordsSchema';

export type GaAdAccountKeywordsResponseSchema = {
  status?: number;
  data?: GaAdAccountKeywordsSchema;
  message?: string;
};
