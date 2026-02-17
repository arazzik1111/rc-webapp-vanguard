export const ResponsiveSearchAdAIValidationObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_ResponsiveSearchAdAIValidation:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\ResponsiveSearchAdAIValidation',
};

export const ResponsiveSearchAdAIValidationObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_ResponsiveSearchAdAIValidation:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\ResponsiveSearchAdAIValidation',
} as const;

export type ResponsiveSearchAdAIValidation = {
  loadingResult?: object;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdAIValidationObjectType)[keyof typeof ResponsiveSearchAdAIValidationObjectType];
};
