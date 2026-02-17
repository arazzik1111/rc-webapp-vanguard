import { ResponsiveSearchAdRestriction } from '@models/swagger/App/Domain/Ads/Entities/Google/ResponsiveSearchAds/Restrictions/ResponsiveSearchAdRestriction';
import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';

export const AdKeywordObjectType = {
  App_Domain_Ads_Entities_AdKeywords_AdKeyword: 'App\\Domain\\Ads\\Entities\\AdKeywords\\AdKeyword',
};

export const AdKeywordObjectTypeStrict = {
  App_Domain_Ads_Entities_AdKeywords_AdKeyword: 'App\\Domain\\Ads\\Entities\\AdKeywords\\AdKeyword',
} as const;

export type AdKeyword = {
  /**
   * The type of the AdKeyword
   */
  type?: string;
  restriction?: ResponsiveSearchAdRestriction;
  /**
   * The id of the location
   */
  locationId?: string | number;
  /**
   * The id of the keyword
   */
  keywordId?: number;
  keyword?: Keyword;
  /**
   * The priority of the keyword for the location
   */
  priority?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdKeywordObjectType)[keyof typeof AdKeywordObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
