import { ResponsiveSearchAdRestriction } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Restrictions/ResponsiveSearchAdRestriction';

export const ResponsiveSearchAdRestrictionsObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Restrictions_ResponsiveSearchAdRestrictions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Restrictions\\ResponsiveSearchAdRestrictions',
};

export const ResponsiveSearchAdRestrictionsObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Restrictions_ResponsiveSearchAdRestrictions:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Restrictions\\ResponsiveSearchAdRestrictions',
} as const;

export type ResponsiveSearchAdRestrictions = {
  elements?: ResponsiveSearchAdRestriction[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdRestrictionsObjectType)[keyof typeof ResponsiveSearchAdRestrictionsObjectType];
};
