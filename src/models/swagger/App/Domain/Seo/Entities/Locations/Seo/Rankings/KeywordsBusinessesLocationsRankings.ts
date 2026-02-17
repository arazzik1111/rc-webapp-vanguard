import { Keywords } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keywords';
import { RankingsComparisons } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/Comparisons/RankingsComparisons';
import { KeywordBusinessesLocationsRankings } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessesLocationsRankings';
import { RankingsBusinesses } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusinesses';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export type KeywordsBusinessesLocationsRankings = {
  locations?: RankingsLocations;
  keywords?: Keywords;
  businesses?: RankingsBusinesses;
  /**
   * Start date for rankings
   */
  dateFrom?: string;
  /**
   * End date for rankings
   */
  dateTo?: string;
  /**
   * If true, rankings for current day, will be called live
   */
  requestLiveRankingsForCurrentDay?: boolean;
  /**
   * If true, missing rankings, will be called live
   */
  requestLiveRankingsForMissing?: boolean;
  comparisons?: RankingsComparisons;
  elements?: KeywordBusinessesLocationsRankings[];
};
