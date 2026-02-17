import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';
import { SeoKeywordAdsData } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Keywords/Data/SeoKeywordAdsData';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export const SeoKeywordObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_SeoKeyword:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\SeoKeyword',
};

export const SeoKeywordObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Keywords_SeoKeyword:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Keywords\\SeoKeyword',
} as const;

export type SeoKeyword = {
  /**
   * The type of the keyword
   */
  type?: string;
  rankingsLocations?: RankingsLocations;
  adsData?: SeoKeywordAdsData;
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
  objectType: (typeof SeoKeywordObjectType)[keyof typeof SeoKeywordObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
