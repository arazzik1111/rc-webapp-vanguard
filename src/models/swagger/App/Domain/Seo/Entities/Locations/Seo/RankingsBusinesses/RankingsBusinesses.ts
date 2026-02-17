import { RankingsBusiness } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/RankingsBusinesses/RankingsBusiness';

export const RankingsBusinessesObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_RankingsBusinesses_RankingsBusinesses:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\RankingsBusinesses\\RankingsBusinesses',
};

export const RankingsBusinessesObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_RankingsBusinesses_RankingsBusinesses:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\RankingsBusinesses\\RankingsBusinesses',
} as const;

export type RankingsBusinesses = {
  elements?: RankingsBusiness[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RankingsBusinessesObjectType)[keyof typeof RankingsBusinessesObjectType];
};
