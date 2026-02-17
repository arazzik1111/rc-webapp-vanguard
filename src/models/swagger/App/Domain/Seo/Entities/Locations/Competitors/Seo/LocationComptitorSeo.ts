import { GoogleAnalyticsProperties } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/GoogleAnalyticsProperties';
import { AnalyticsPropertyReports } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/Reports/AnalyticsPropertyReports';
import { SeoKeywords } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Keywords/SeoKeywords';
import { LocationSeoConnections } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/LocationSeoConnections';
import { KeywordsBusinessesLocationsRankings } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordsBusinessesLocationsRankings';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export const LocationComptitorSeoObjectType = {
  App_Domain_Seo_Entities_Locations_Competitors_Seo_LocationComptitorSeo:
    'App\\Domain\\Seo\\Entities\\Locations\\Competitors\\Seo\\LocationComptitorSeo',
};

export const LocationComptitorSeoObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Competitors_Seo_LocationComptitorSeo:
    'App\\Domain\\Seo\\Entities\\Locations\\Competitors\\Seo\\LocationComptitorSeo',
} as const;

export type LocationComptitorSeo = {
  rankingsBusiness?: RankingsBusiness;
  keywords?: SeoKeywords;
  rankings?: KeywordsBusinessesLocationsRankings;
  rankingsLocations?: RankingsLocations;
  seoConnections?: LocationSeoConnections;
  analyticsProperties?: GoogleAnalyticsProperties;
  analyticsPropertyReports?: AnalyticsPropertyReports;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationComptitorSeoObjectType)[keyof typeof LocationComptitorSeoObjectType];
};
