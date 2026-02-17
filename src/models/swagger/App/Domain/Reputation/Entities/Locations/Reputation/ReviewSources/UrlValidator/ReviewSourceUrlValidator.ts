export const ReviewSourceUrlValidatorObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_UrlValidator_ReviewSourceUrlValidator:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\UrlValidator\\ReviewSourceUrlValidator',
};

export const ReviewSourceUrlValidatorObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_UrlValidator_ReviewSourceUrlValidator:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\UrlValidator\\ReviewSourceUrlValidator',
} as const;

export type ReviewSourceUrlValidator = {
  /**
   * The URL of the review source
   */
  initialUrl?: string;
  /**
   * The normalized URL of the review source
   */
  normalizedUrl?: string;
  /**
   * Whether there was a domain change in the url during normalization
   */
  hasDomainChange?: boolean;
  isValid?: boolean;
  /**
   * The name of the review source
   */
  reviewSourceEngine?: string;
  /**
   * Two-letter country code used for normalizing the url for the Review Source based on the country
   */
  countryCode?: string;
  /**
   * Valid patterns for the url for the given Review Source
   */
  validPatternsForReviewSource?: string[];
  /**
   * The message received after performing the validation
   */
  validationResponseMessage?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourceUrlValidatorObjectType)[keyof typeof ReviewSourceUrlValidatorObjectType];
};
