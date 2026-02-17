import { Keyword } from '@models/swagger/App/Domain/Common/Entities/Keywords/Keyword';
import { KeywordBusinessLocationRanking } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordBusinessLocationRanking';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { RankingsLocation } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocation';

export type KeywordBusinessLocationRankings = {
  location?: RankingsLocation;
  business?: RankingsBusiness;
  keyword?: Keyword;
  elements?: KeywordBusinessLocationRanking[];
};
