import { AdKeywords } from '@models/swagger/App/Domain/Ads/Entities/AdKeywords/AdKeywords';
import { ResponsiveSearchAdDescriptions } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Descriptions/ResponsiveSearchAdDescriptions';
import { ResponsiveSearchAdHeadlines } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Headlines/ResponsiveSearchAdHeadlines';
import { ResponsiveSearchAdAIValidation } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/ResponsiveSearchAdAIValidation';
import { ResponsiveSearchAdRestrictions } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Restrictions/ResponsiveSearchAdRestrictions';

export const ResponsiveSearchAdObjectType = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_ResponsiveSearchAd:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\ResponsiveSearchAd',
};

export const ResponsiveSearchAdObjectTypeStrict = {
  App_Domain_Ads_Entities_Google_ResponsiveSearchAds_ResponsiveSearchAd:
    'App\\Domain\\Ads\\Entities\\Google\\ResponsiveSearchAds\\ResponsiveSearchAd',
} as const;

export type ResponsiveSearchAd = {
  headlines?: ResponsiveSearchAdHeadlines;
  descriptions?: ResponsiveSearchAdDescriptions;
  keywords?: AdKeywords;
  aiValidation?: ResponsiveSearchAdAIValidation;
  restrictions?: ResponsiveSearchAdRestrictions;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResponsiveSearchAdObjectType)[keyof typeof ResponsiveSearchAdObjectType];
};
