import { LinkedInLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/LinkedInLocation';

export const LinkedInLocationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_LinkedInLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\LinkedInLocations',
};

export const LinkedInLocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_LinkedInLocations:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\LinkedInLocations',
} as const;

export type LinkedInLocations = {
  elements?: LinkedInLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedInLocationsObjectType)[keyof typeof LinkedInLocationsObjectType];
};
