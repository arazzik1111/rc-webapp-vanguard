import { ResponsiveSearchAdRestriction } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Restrictions/ResponsiveSearchAdRestriction';

export const ResponsiveSearchAdDescriptionObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Descriptions_ResponsiveSearchAdDescription:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Descriptions\\ResponsiveSearchAdDescription',
};

export const ResponsiveSearchAdDescriptionObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Descriptions_ResponsiveSearchAdDescription:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Descriptions\\ResponsiveSearchAdDescription',
} as const;

export type ResponsiveSearchAdDescription = {
  /**
   * Description text
   */
  description?: string;
  restriction?: ResponsiveSearchAdRestriction;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdDescriptionObjectType)[keyof typeof ResponsiveSearchAdDescriptionObjectType];
};
