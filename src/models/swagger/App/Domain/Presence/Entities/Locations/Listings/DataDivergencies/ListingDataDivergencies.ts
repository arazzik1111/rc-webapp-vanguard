import { ListingDataDivergency } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/DataDivergencies/ListingDataDivergency';

export const ListingDataDivergenciesSyncStatus = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
};

export const ListingDataDivergenciesSyncStatusStrict = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
} as const;

export const ListingDataDivergenciesObjectType = {
  App_Domain_Presence_Entities_Locations_Listings_DataDivergencies_ListingDataDivergencies:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\DataDivergencies\\ListingDataDivergencies',
};

export const ListingDataDivergenciesObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Listings_DataDivergencies_ListingDataDivergencies:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\DataDivergencies\\ListingDataDivergencies',
} as const;

export type ListingDataDivergencies = {
  /**
   * Depicts wheather the information is correct or not correct, if the engine does not support this type of data, we consider it in sync
   *  Allowed Values:
   * -   `IN_SYNC`: All data is in sync
   * -   `NOT_IN_SYNC`: Some data is not in sync
   *
   */
  syncStatus?: (typeof ListingDataDivergenciesSyncStatus)[keyof typeof ListingDataDivergenciesSyncStatus];
  elements?: ListingDataDivergency[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingDataDivergenciesObjectType)[keyof typeof ListingDataDivergenciesObjectType];
};
