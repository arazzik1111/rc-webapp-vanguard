import { DateValueSequence } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValueSequence';
import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';

export const SeoKeywordAdsDataAdsCompetiton = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
};

export const SeoKeywordAdsDataAdsCompetitonStrict = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
} as const;

export const SeoKeywordAdsDataObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_Data_SeoKeywordAdsData:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\Data\\SeoKeywordAdsData',
};

export const SeoKeywordAdsDataObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_Data_SeoKeywordAdsData:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\Data\\SeoKeywordAdsData',
} as const;

export type SeoKeywordAdsData = {
  /**
   * Google Ads competition
   *  Allowed Values:
   * -   `LOW`: Google Ads competition Low
   * -   `MEDIUM`: Google Ads competition Medium
   * -   `LOW`: Google Ads competition Low
   *
   */
  adsCompetiton?: (typeof SeoKeywordAdsDataAdsCompetiton)[keyof typeof SeoKeywordAdsDataAdsCompetiton];
  /**
   * Global search volume on Google
   */
  searchVolumeGlobal?: number;
  searchVolumeHistory?: DateValueSequence;
  /**
   * Amount of potential Ads impressions
   */
  potentialImpressions?: number;
  /**
   * Potential Clicks for Keyword
   */
  potentialClicks?: number;
  /**
   * Estimated Click through Rate on Google Ads
   */
  estimatedClickThroughRate?: number;
  averageCPC?: MoneyAmount;
  estimatedMaxCosts?: MoneyAmount;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SeoKeywordAdsDataObjectType)[keyof typeof SeoKeywordAdsDataObjectType];
};
