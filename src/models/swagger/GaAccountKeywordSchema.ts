export const GaAccountKeywordSchemaType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordSchemaTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export const GaAccountKeywordSchemaMatchingType = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
};

export const GaAccountKeywordSchemaMatchingTypeStrict = {
  broad: 'broad',
  exact: 'exact',
  phrase: 'phrase',
} as const;

export type GaAccountKeywordSchema = {
  unformattedName?: string;
  name?: string;
  type?: (typeof GaAccountKeywordSchemaType)[keyof typeof GaAccountKeywordSchemaType];
  matchingType?: (typeof GaAccountKeywordSchemaMatchingType)[keyof typeof GaAccountKeywordSchemaMatchingType];
  position?: string;
  priority?: number;
  lowerCostPerClick?: number;
  upperCostPerClick?: number;
  volumeCountrywide?: number;
  volumeLocal?: number;
  scorePercent?: number;
  hash?: string;
};
