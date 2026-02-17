export const GaAccountKeywordsIndexRequestSchemaType = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
};

export const GaAccountKeywordsIndexRequestSchemaTypeStrict = {
  general: 'general',
  negative: 'negative',
  brand: 'brand',
} as const;

export type GaAccountKeywordsIndexRequestSchema = {
  type?: (typeof GaAccountKeywordsIndexRequestSchemaType)[keyof typeof GaAccountKeywordsIndexRequestSchemaType];
};
