import { GoogleLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/GoogleLocation';

export const GoogleLocationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_GoogleLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\GoogleLocations',
};

export const GoogleLocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_GoogleLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\GoogleLocations',
} as const;

export type GoogleLocations = {
  elements?: GoogleLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationsObjectType)[keyof typeof GoogleLocationsObjectType];
};
