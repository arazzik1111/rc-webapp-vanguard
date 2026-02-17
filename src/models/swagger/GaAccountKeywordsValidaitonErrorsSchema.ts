export const GaAccountKeywordsValidaitonErrorsSchemaType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordsValidaitonErrorsSchemaTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export const GaAccountKeywordsValidaitonErrorsSchemaExistingType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordsValidaitonErrorsSchemaExistingTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export const GaAccountKeywordsValidaitonErrorsSchemaMatchingType = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
};

export const GaAccountKeywordsValidaitonErrorsSchemaMatchingTypeStrict = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
} as const;

export const GaAccountKeywordsValidaitonErrorsSchemaError = {
  keywordAlreadyAdded: 'keywordAlreadyAdded',
  keywordTypeDuplicated: 'keywordTypeDuplicated',
  keywordTooLong: 'keywordTooLong',
  keywordTooShort: 'keywordTooShort',
};

export const GaAccountKeywordsValidaitonErrorsSchemaErrorStrict = {
  keywordAlreadyAdded: 'keywordAlreadyAdded',
  keywordTypeDuplicated: 'keywordTypeDuplicated',
  keywordTooLong: 'keywordTooLong',
  keywordTooShort: 'keywordTooShort',
} as const;

export type GaAccountKeywordsValidaitonErrorsSchema = {
  message?: string;
  keyword?: string;
  type?: (typeof GaAccountKeywordsValidaitonErrorsSchemaType)[keyof typeof GaAccountKeywordsValidaitonErrorsSchemaType];
  existingType?: (typeof GaAccountKeywordsValidaitonErrorsSchemaExistingType)[keyof typeof GaAccountKeywordsValidaitonErrorsSchemaExistingType];
  matchingType?: (typeof GaAccountKeywordsValidaitonErrorsSchemaMatchingType)[keyof typeof GaAccountKeywordsValidaitonErrorsSchemaMatchingType];
  error?: (typeof GaAccountKeywordsValidaitonErrorsSchemaError)[keyof typeof GaAccountKeywordsValidaitonErrorsSchemaError];
};
