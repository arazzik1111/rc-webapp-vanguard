export const ResponsiveSearchAdsGroupSuggestionObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Groups_Suggestions_ResponsiveSearchAdsGroupSuggestion:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Groups\\Suggestions\\ResponsiveSearchAdsGroupSuggestion',
};

export const ResponsiveSearchAdsGroupSuggestionObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Groups_Suggestions_ResponsiveSearchAdsGroupSuggestion:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Groups\\Suggestions\\ResponsiveSearchAdsGroupSuggestion',
} as const;

export type ResponsiveSearchAdsGroupSuggestion = {
  /**
   * The first headline of the ad group suggestion
   */
  headline1?: string;
  /**
   * The second headline of the ad group suggestion
   */
  headline2?: string;
  /**
   * The third headline of the ad group suggestion
   */
  headline3?: string;
  /**
   * The first description of the ad group suggestion
   */
  description1?: string;
  /**
   * The second description of the ad group suggestion
   */
  description2?: string;
  /**
   * The domain of the ad group suggestion
   */
  domain?: string;
  /**
   * The suggested ad id of the ad group suggestion
   */
  suggestedAdId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdsGroupSuggestionObjectType)[keyof typeof ResponsiveSearchAdsGroupSuggestionObjectType];
};
