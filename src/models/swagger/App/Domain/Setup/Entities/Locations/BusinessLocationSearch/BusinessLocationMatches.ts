import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';
import { BusinessLocationMatch } from '@models/swagger/App/Domain/Setup/Entities/Locations/BusinessLocationSearch/BusinessLocationMatch';

export const BusinessLocationMatchesObjectType = {
  App_Domain_Setup_Entities_Locations_BusinessLocationSearch_BusinessLocationMatches:
    'App\\Domain\\Setup\\Entities\\Locations\\BusinessLocationSearch\\BusinessLocationMatches',
};

export const BusinessLocationMatchesObjectTypeStrict = {
  App_Domain_Setup_Entities_Locations_BusinessLocationSearch_BusinessLocationMatches:
    'App\\Domain\\Setup\\Entities\\Locations\\BusinessLocationSearch\\BusinessLocationMatches',
} as const;

export type BusinessLocationMatches = {
  /**
   * Search input
   */
  searchInput?: string;
  /**
   * Language code
   */
  languageCode?: string;
  /**
   * Country short code
   */
  countryShortCode?: string;
  geoPoint?: GeoPoint;
  elements?: BusinessLocationMatch[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BusinessLocationMatchesObjectType)[keyof typeof BusinessLocationMatchesObjectType];
};
