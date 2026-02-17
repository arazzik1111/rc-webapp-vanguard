import { RankingsLocation } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsLocations/RankingsLocation';

export const RankingsLocationsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_RankingsLocations_RankingsLocations:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\RankingsLocations\\RankingsLocations',
};

export const RankingsLocationsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_RankingsLocations_RankingsLocations:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\RankingsLocations\\RankingsLocations',
} as const;

export type RankingsLocations = {
  elements?: RankingsLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RankingsLocationsObjectType)[keyof typeof RankingsLocationsObjectType];
};
