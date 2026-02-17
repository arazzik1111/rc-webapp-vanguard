import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';

export const LocationKeywordType = {
  general: 'general',
  seo: 'seo',
  ads: 'ads',
};

export const LocationKeywordTypeStrict = {
  general: 'general',
  seo: 'seo',
  ads: 'ads',
} as const;

export const LocationKeywordObjectType = {
  App_Domain_Presence_Entities_Locations_Keywords_LocationKeyword:
    'App\\Domain\\Presence\\Entities\\Locations\\Keywords\\LocationKeyword',
};

export const LocationKeywordObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Keywords_LocationKeyword:
    'App\\Domain\\Presence\\Entities\\Locations\\Keywords\\LocationKeyword',
} as const;

export type LocationKeyword = {
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
   * The type of the keyword
   *  Allowed Values:
   * -   `general`: Keyword type General
   * -   `seo`: Keyword type SEO
   * -   `ads`: Keyword type Ads
   *
   */
  type?: (typeof LocationKeywordType)[keyof typeof LocationKeywordType];
  /**
   * The priority of the keyword for the location
   */
  priority?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationKeywordObjectType)[keyof typeof LocationKeywordObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
