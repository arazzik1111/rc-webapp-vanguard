import { ArgusLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Argus/Locations/ArgusLocation';

export const ArgusLocationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusLocations',
};

export const ArgusLocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusLocations',
} as const;

export type ArgusLocations = {
  /**
   * The string to search for
   */
  searchInput?: string;
  /**
   * The language code to display search results
   */
  languageCode?: string;
  elements?: ArgusLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusLocationsObjectType)[keyof typeof ArgusLocationsObjectType];
};
