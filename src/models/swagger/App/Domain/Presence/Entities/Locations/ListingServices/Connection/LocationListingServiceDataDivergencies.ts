import { ListingDataDivergency } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/DataDivergencies/ListingDataDivergency';

export const LocationListingServiceDataDivergenciesSyncStatus = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
};

export const LocationListingServiceDataDivergenciesSyncStatusStrict = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
} as const;

export const LocationListingServiceDataDivergenciesObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServiceDataDivergencies:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServiceDataDivergencies',
};

export const LocationListingServiceDataDivergenciesObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServiceDataDivergencies:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServiceDataDivergencies',
} as const;

export type LocationListingServiceDataDivergencies = {
  /**
   * Depicts wheather the information is correct or not correct, if the engine does not support this type of data, we consider it in sync
   *  Allowed Values:
   * -   `IN_SYNC`: All data is in sync
   * -   `NOT_IN_SYNC`: Some data is not in sync
   *
   */
  syncStatus?: (typeof LocationListingServiceDataDivergenciesSyncStatus)[keyof typeof LocationListingServiceDataDivergenciesSyncStatus];
  elements?: ListingDataDivergency[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationListingServiceDataDivergenciesObjectType)[keyof typeof LocationListingServiceDataDivergenciesObjectType];
};
