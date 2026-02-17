import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';
import { KeywordBusinessLocationsRankings } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessLocationsRankings';
import { RankingsBusinesses } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusinesses';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export type KeywordBusinessesLocationsRankings = {
  locations?: RankingsLocations;
  keyword?: Keyword;
  businesses?: RankingsBusinesses;
  elements?: KeywordBusinessLocationsRankings[];
};
