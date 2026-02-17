import { KeywordBusinessLocationRankingScreenshot } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessLocationRankingScreenshot';

export const KeywordBusinessLocationRankingRankingState = {
  CACHE: 'CACHE',
  NO_DATA: 'NO_DATA',
  NOT_RANKED: 'NOT_RANKED',
};

export const KeywordBusinessLocationRankingRankingStateStrict = {
  CACHE: 'CACHE',
  NO_DATA: 'NO_DATA',
  NOT_RANKED: 'NOT_RANKED',
} as const;

export type KeywordBusinessLocationRanking = {
  /**
   * Date of the ranking
   */
  date?: string;
  /**
   * Google Maps ranking from search location
   */
  maps?: number;
  /**
   * Organic search on google
   */
  organic?: number;
  /**
   * Best pick out of organic rankings (places, local pack, organic)
   */
  bestOrganic?: number;
  /**
   * Google Ads results
   */
  ads?: number;
  /**
   * Local pack results in organic search (the 3-4 local rankings within search results)
   */
  localPack?: number;
  /**
   * If true, the best ranking is either from places or from local pack. Can be used e.g. for display of map pin icon.
   */
  bestIsLocal?: boolean;
  /**
   * If set, the path / subpage of the Domain found in rankings
   */
  path?: string;
  /**
   * Type of ranking:
   * cache: comes from no sql db
   * no_positions: no rankings found
   * no_data: no data available for current day
   *  Allowed Values:
   * -   `CACHE`: Data available, from DB
   * -   `NO_DATA`: Data not available for given date
   * -   `NOT_RANKED`: No rankings found
   *
   */
  rankingState?: (typeof KeywordBusinessLocationRankingRankingState)[keyof typeof KeywordBusinessLocationRankingRankingState];
  rankingScreenshot?: KeywordBusinessLocationRankingScreenshot;
};
