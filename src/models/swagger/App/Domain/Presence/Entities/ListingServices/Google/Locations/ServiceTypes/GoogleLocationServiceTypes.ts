import { GoogleLocationServiceType } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/ServiceTypes/GoogleLocationServiceType';

export const GoogleLocationServiceTypesObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceTypes_GoogleLocationServiceTypes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceTypes\\GoogleLocationServiceTypes',
};

export const GoogleLocationServiceTypesObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceTypes_GoogleLocationServiceTypes:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceTypes\\GoogleLocationServiceTypes',
} as const;

export type GoogleLocationServiceTypes = {
  elements?: GoogleLocationServiceType[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationServiceTypesObjectType)[keyof typeof GoogleLocationServiceTypesObjectType];
};
