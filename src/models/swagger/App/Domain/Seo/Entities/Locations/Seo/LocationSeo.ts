import { GoogleAnalyticsProperties } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/GoogleAnalyticsProperties';
import { AnalyticsPropertyReports } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/Reports/AnalyticsPropertyReports';
import { SeoKeywords } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Keywords/SeoKeywords';
import { LocationSeoConnections } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/LocationSeoConnections';
import { KeywordsBusinessesLocationsRankings } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Rankings/KeywordsBusinessesLocationsRankings';
import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';
import { RankingsLocations } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocations';

export const LocationSeoObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeo: 'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeo',
};

export const LocationSeoObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeo: 'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeo',
} as const;

export type LocationSeo = {
  keywords?: SeoKeywords;
  rankings?: KeywordsBusinessesLocationsRankings;
  rankingsLocations?: RankingsLocations;
  rankingsBusiness?: RankingsBusiness;
  seoConnections?: LocationSeoConnections;
  analyticsProperties?: GoogleAnalyticsProperties;
  analyticsPropertyReports?: AnalyticsPropertyReports;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationSeoObjectType)[keyof typeof LocationSeoObjectType];
};
