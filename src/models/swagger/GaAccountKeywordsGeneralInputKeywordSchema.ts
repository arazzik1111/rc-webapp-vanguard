export const GaAccountKeywordsGeneralInputKeywordSchemaType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordsGeneralInputKeywordSchemaTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export const GaAccountKeywordsGeneralInputKeywordSchemaMatchingType = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
};

export const GaAccountKeywordsGeneralInputKeywordSchemaMatchingTypeStrict = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
} as const;

export type GaAccountKeywordsGeneralInputKeywordSchema = {
  name: string;
  type: (typeof GaAccountKeywordsGeneralInputKeywordSchemaType)[keyof typeof GaAccountKeywordsGeneralInputKeywordSchemaType];
  matchingType: (typeof GaAccountKeywordsGeneralInputKeywordSchemaMatchingType)[keyof typeof GaAccountKeywordsGeneralInputKeywordSchemaMatchingType];
  hash?: string;
  priority?: number;
};
