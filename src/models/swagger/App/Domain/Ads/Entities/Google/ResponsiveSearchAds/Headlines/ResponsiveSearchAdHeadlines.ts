import { ResponsiveSearchAdHeadline } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Headlines/ResponsiveSearchAdHeadline';

export const ResponsiveSearchAdHeadlinesObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Headlines_ResponsiveSearchAdHeadlines:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Headlines\\ResponsiveSearchAdHeadlines',
};

export const ResponsiveSearchAdHeadlinesObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Headlines_ResponsiveSearchAdHeadlines:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Headlines\\ResponsiveSearchAdHeadlines',
} as const;

export type ResponsiveSearchAdHeadlines = {
  elements?: ResponsiveSearchAdHeadline[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdHeadlinesObjectType)[keyof typeof ResponsiveSearchAdHeadlinesObjectType];
};
