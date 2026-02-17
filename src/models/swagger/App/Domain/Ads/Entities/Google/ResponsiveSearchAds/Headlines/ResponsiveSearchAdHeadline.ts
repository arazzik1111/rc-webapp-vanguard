import { ResponsiveSearchAdRestriction } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Restrictions/ResponsiveSearchAdRestriction';

export const ResponsiveSearchAdHeadlineObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Headlines_ResponsiveSearchAdHeadline:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Headlines\\ResponsiveSearchAdHeadline',
};

export const ResponsiveSearchAdHeadlineObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_Headlines_ResponsiveSearchAdHeadline:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\Headlines\\ResponsiveSearchAdHeadline',
} as const;

export type ResponsiveSearchAdHeadline = {
  /**
   * Headline text
   */
  headline?: string;
  restriction?: ResponsiveSearchAdRestriction;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdHeadlineObjectType)[keyof typeof ResponsiveSearchAdHeadlineObjectType];
};
