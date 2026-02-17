import { GaAccountKeywordsGeneralInputKeywordSchema } from '@models/swagger//GaAccountKeywordsGeneralInputKeywordSchema';

export type GaAccountKeywordsGeneralInputRequestSchema = {
  keywords: GaAccountKeywordsGeneralInputKeywordSchema[];
  currentKeywords?: GaAccountKeywordsGeneralInputKeywordSchema[];
};
