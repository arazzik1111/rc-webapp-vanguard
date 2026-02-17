import { ResponsiveSearchAdDescription } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Descriptions/ResponsiveSearchAdDescription';

export const ResponsiveSearchAdDescriptionsObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Descriptions_ResponsiveSearchAdDescriptions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Descriptions\\ResponsiveSearchAdDescriptions',
};

export const ResponsiveSearchAdDescriptionsObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Descriptions_ResponsiveSearchAdDescriptions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Descriptions\\ResponsiveSearchAdDescriptions',
} as const;

export type ResponsiveSearchAdDescriptions = {
  elements?: ResponsiveSearchAdDescription[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdDescriptionsObjectType)[keyof typeof ResponsiveSearchAdDescriptionsObjectType];
};
