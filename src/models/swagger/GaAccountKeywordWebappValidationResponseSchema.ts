import { GaAccountKeywordSchema } from '@models/swagger//GaAccountKeywordSchema';
import { GaAccountKeywordsValidaitonErrorsSchema } from '@models/swagger//GaAccountKeywordsValidaitonErrorsSchema';

export type GaAccountKeywordWebappValidationResponseSchema = {
  errors?: GaAccountKeywordsValidaitonErrorsSchema[];
  errorsCount?: number;
  keywordsAlreadyAdded?: number;
  keywordsTypeDuplicated?: number;
  keywordTooLong?: number;
  keywordTooShort?: number;
  validKeywords?: GaAccountKeywordSchema[];
};
