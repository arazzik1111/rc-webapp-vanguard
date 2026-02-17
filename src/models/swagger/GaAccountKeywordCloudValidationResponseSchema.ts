export const GaAccountKeywordCloudValidationResponseSchemaType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordCloudValidationResponseSchemaTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export const GaAccountKeywordCloudValidationResponseSchemaMatchingType = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
};

export const GaAccountKeywordCloudValidationResponseSchemaMatchingTypeStrict = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
} as const;

export type GaAccountKeywordCloudValidationResponseSchema = {
  name?: string;
  type?: (typeof GaAccountKeywordCloudValidationResponseSchemaType)[keyof typeof GaAccountKeywordCloudValidationResponseSchemaType];
  matchingType?: (typeof GaAccountKeywordCloudValidationResponseSchemaMatchingType)[keyof typeof GaAccountKeywordCloudValidationResponseSchemaMatchingType];
  hash?: string;
  valid?: boolean;
};
