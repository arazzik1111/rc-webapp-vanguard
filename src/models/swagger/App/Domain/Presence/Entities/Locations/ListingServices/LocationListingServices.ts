import { LocationListingService } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/LocationListingService';

export const LocationListingServicesObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_LocationListingServices:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\LocationListingServices',
};

export const LocationListingServicesObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_LocationListingServices:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\LocationListingServices',
} as const;

export type LocationListingServices = {
  /**
   * If true, a full listing service is available
   */
  hasFullListingService?: boolean;
  /**
   * If true, the location was at least once synced with a full ListingService
   */
  hasOnceSyncedFullListingService?: boolean;
  elements?: LocationListingService[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationListingServicesObjectType)[keyof typeof LocationListingServicesObjectType];
};
