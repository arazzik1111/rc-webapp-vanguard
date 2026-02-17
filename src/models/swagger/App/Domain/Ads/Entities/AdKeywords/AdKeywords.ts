import { AdKeyword } from '@models/swagger/App/Domain/Ads/Entities/AdKeywords/AdKeyword';

export const AdKeywordsObjectType = {
  App_Domain_Ads_Entities_AdKeywords_AdKeywords: 'App\\Domain\\Ads\\Entities\\AdKeywords\\AdKeywords',
};

export const AdKeywordsObjectTypeStrict = {
  App_Domain_Ads_Entities_AdKeywords_AdKeywords: 'App\\Domain\\Ads\\Entities\\AdKeywords\\AdKeywords',
} as const;

export type AdKeywords = {
  elements?: AdKeyword[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdKeywordsObjectType)[keyof typeof AdKeywordsObjectType];
};
