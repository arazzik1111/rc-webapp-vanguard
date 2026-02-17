import { FacebookLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/FacebookLocation';

export const FacebookLocationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_FacebookLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\FacebookLocations',
};

export const FacebookLocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_FacebookLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\FacebookLocations',
} as const;

export type FacebookLocations = {
  elements?: FacebookLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookLocationsObjectType)[keyof typeof FacebookLocationsObjectType];
};
