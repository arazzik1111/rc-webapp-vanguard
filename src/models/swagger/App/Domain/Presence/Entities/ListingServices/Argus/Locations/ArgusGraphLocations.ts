import { ArgusGraphLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Argus/Locations/ArgusGraphLocation';

export const ArgusGraphLocationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusGraphLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusGraphLocations',
};

export const ArgusGraphLocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Argus_Locations_ArgusGraphLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Argus\\Locations\\ArgusGraphLocations',
} as const;

export type ArgusGraphLocations = {
  /**
   * The string to search for
   */
  searchInput?: string;
  /**
   * The language code to display search results
   */
  languageCode?: string;
  elements?: ArgusGraphLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ArgusGraphLocationsObjectType)[keyof typeof ArgusGraphLocationsObjectType];
};
