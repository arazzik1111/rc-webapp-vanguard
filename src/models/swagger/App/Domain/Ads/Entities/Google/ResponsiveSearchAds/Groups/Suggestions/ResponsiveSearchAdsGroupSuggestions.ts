import { ResponsiveSearchAdsGroupSuggestion } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Groups/Suggestions/ResponsiveSearchAdsGroupSuggestion';

export const ResponsiveSearchAdsGroupSuggestionsObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Groups_Suggestions_ResponsiveSearchAdsGroupSuggestions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Groups\\Suggestions\\ResponsiveSearchAdsGroupSuggestions',
};

export const ResponsiveSearchAdsGroupSuggestionsObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Groups_Suggestions_ResponsiveSearchAdsGroupSuggestions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Groups\\Suggestions\\ResponsiveSearchAdsGroupSuggestions',
} as const;

export type ResponsiveSearchAdsGroupSuggestions = {
  elements?: ResponsiveSearchAdsGroupSuggestion[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdsGroupSuggestionsObjectType)[keyof typeof ResponsiveSearchAdsGroupSuggestionsObjectType];
};
