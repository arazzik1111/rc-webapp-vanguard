import { GaAccountKeywordCloudValidationResponseSchema } from '@models/swagger//GaAccountKeywordCloudValidationResponseSchema';

export type GaAccountKeywordsCloudValidationResponseSchema = {
  status?: number;
  data?: GaAccountKeywordCloudValidationResponseSchema[];
  message?: string;
};
