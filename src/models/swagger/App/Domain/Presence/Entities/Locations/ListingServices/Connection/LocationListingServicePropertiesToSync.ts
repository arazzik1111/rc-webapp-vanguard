import { LocationListingServiceDataDivergencies } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/LocationListingServiceDataDivergencies';

export const LocationListingServicePropertiesToSyncObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServicePropertiesToSync:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServicePropertiesToSync',
};

export const LocationListingServicePropertiesToSyncObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServicePropertiesToSync:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServicePropertiesToSync',
} as const;

export type LocationListingServicePropertiesToSync = {
  /**
   * Wheather the locations address is updated and needs to be synced
   */
  postalAddress?: boolean;
  /**
   * Wheather contact infos (phone numbers) are updated and needs to be synced
   */
  contactInfos?: boolean;
  /**
   * Wheather opening hours are updated and needs to be synced
   */
  openingHours?: boolean;
  /**
   * Wheather website is updated and needs to be synced
   */
  website?: boolean;
  /**
   * Wheather company / business name is updated and needs to be synced
   */
  company?: boolean;
  /**
   * Wheather categories are updated and needs to be synced
   */
  categories?: boolean;
  /**
   * Wheather descriptions are updated and needs to be synced
   */
  description?: boolean;
  /**
   * Wheather media items are updated and needs to be synced
   */
  mediaitems?: boolean;
  /**
   * Wheather business type is updated and needs to be synced
   */
  serviceAreas?: boolean;
  dataDivergencies?: LocationListingServiceDataDivergencies;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationListingServicePropertiesToSyncObjectType)[keyof typeof LocationListingServicePropertiesToSyncObjectType];
};
