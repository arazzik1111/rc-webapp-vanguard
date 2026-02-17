import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';
import { KeywordBusinessLocationRankings } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessLocationRankings';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export type KeywordBusinessLocationsRankings = {
  locations?: RankingsLocations;
  business?: RankingsBusiness;
  keyword?: Keyword;
  elements?: KeywordBusinessLocationRankings[];
};
