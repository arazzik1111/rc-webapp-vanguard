import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';
import { KeywordBusinessLocationRanking } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessLocationRanking';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { RankingsLocation } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocation';

export const RankingsComparisonChangeTypeOrganic = {
  constant: 'constant',
  increase: 'increase',
  decrease: 'decrease',
};

export const RankingsComparisonChangeTypeOrganicStrict = {
  constant: 'constant',
  increase: 'increase',
  decrease: 'decrease',
} as const;

export const RankingsComparisonChangeTypeMaps = {
  constant: 'constant',
  increase: 'increase',
  decrease: 'decrease',
};

export const RankingsComparisonChangeTypeMapsStrict = {
  constant: 'constant',
  increase: 'increase',
  decrease: 'decrease',
} as const;

export const RankingsComparisonObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparison:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparison',
};

export const RankingsComparisonObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_Comparisons_RankingsComparison:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\Comparisons\\RankingsComparison',
} as const;

export type RankingsComparison = {
  business?: RankingsBusiness;
  keyword?: Keyword;
  location?: RankingsLocation;
  rankingAtStart?: KeywordBusinessLocationRanking;
  rankingAtEnd?: KeywordBusinessLocationRanking;
  /**
   * Type of change between start and end ranking for Google Search organic ranking
   *  Allowed Values:
   * -   `constant`: Type of change between start and end ranking for Google Search organic ranking
   * -   `increase`: Type of change between start and end ranking for Google Search organic ranking
   * -   `decrease`: Type of change between start and end ranking for Google Maps ranking
   *
   */
  changeTypeOrganic?: (typeof RankingsComparisonChangeTypeOrganic)[keyof typeof RankingsComparisonChangeTypeOrganic];
  /**
   * Type of change between start and end ranking for Google Maps ranking
   *  Allowed Values:
   * -   `constant`: Type of change between start and end ranking for Google Search organic ranking
   * -   `increase`: Type of change between start and end ranking for Google Search organic ranking
   * -   `decrease`: Type of change between start and end ranking for Google Maps ranking
   *
   */
  changeTypeMaps?: (typeof RankingsComparisonChangeTypeMaps)[keyof typeof RankingsComparisonChangeTypeMaps];
  /**
   * Delta between 2 organic rankings, no ranking will be considered 100
   */
  deltaOrganic?: number;
  /**
   * delta between 2 maps rankings, no ranking will be considered 100
   */
  deltaMaps?: number;
  /**
   * true if at least a ranking is present at start or at end date
   */
  hasAtleastOneRanking?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RankingsComparisonObjectType)[keyof typeof RankingsComparisonObjectType];
};
