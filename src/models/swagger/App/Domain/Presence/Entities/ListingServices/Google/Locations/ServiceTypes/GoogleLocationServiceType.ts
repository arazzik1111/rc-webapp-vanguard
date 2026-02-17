import { GoogleCategory } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Categories/GoogleCategory';

export const GoogleLocationServiceTypeObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceTypes_GoogleLocationServiceType:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceTypes\\GoogleLocationServiceType',
};

export const GoogleLocationServiceTypeObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_ServiceTypes_GoogleLocationServiceType:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\ServiceTypes\\GoogleLocationServiceType',
} as const;

export type GoogleLocationServiceType = {
  /**
   * Output only. A stable ID (provided by Google) for this service type.
   */
  googleIdentifier: string;
  /**
   * Output only. The human-readable display name for the service type.
   */
  displayName?: string;
  category?: GoogleCategory;
  /**
   * Output only. Type of category - primary or additional.
   * This is relevant for custom service items.
   */
  isPrimaryCategory?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationServiceTypeObjectType)[keyof typeof GoogleLocationServiceTypeObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
