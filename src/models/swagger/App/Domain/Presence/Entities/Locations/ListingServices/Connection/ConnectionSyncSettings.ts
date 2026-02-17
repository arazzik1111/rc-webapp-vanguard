import { LocationListingServicePropertiesToSync } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/LocationListingServicePropertiesToSync';

export const ConnectionSyncSettingsObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_ConnectionSyncSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\ConnectionSyncSettings',
};

export const ConnectionSyncSettingsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_ConnectionSyncSettings:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\ConnectionSyncSettings',
} as const;

export type ConnectionSyncSettings = {
  /**
   * Whether to sync location with ListingService or not
   */
  syncLocation?: boolean;
  /**
   * Whether requirements for sync and publishing are satisfied.
   * The only requirement currently is in case of full ListingServices the existence of a phone number
   */
  syncRequirementsSatisfied?: boolean;
  /**
   * Whether to sync logo and main photo or not
   */
  syncLogoAndMainPhoto?: boolean;
  /**
   * Whether to sync gallery pictures or not
   */
  syncGallery?: boolean;
  /**
   * If true, Location data will be overwritten with Data from ListingServiceLocation on external Changes
   * External changes are determined by storing last synced data and comparing with ListingServiceLocation's data
   */
  updateLocationOnExternalDataChanges?: boolean;
  /**
   * If true, notification Emails will be send in case of external data changes
   */
  sendNotificationOnExternalChanges?: boolean;
  /**
   * If true, on external Changes from this ListingService, changes will be propagated to full ListingServices if available
   */
  propagateExternalDataChangesToFullListingServiceLocations?: boolean;
  /**
   * The last time the sync was performed
   */
  lastSyncDate?: string;
  /**
   * The last time an external change has been updated to directory
   */
  lastUpdateFromExternalChangesDate?: string;
  /**
   * The DateTime when the next check for external data changes is scheduled, used for check on external changes in Google Business Profile
   */
  nextCheckForExternalDataChangesDate?: string;
  /**
   * The DateTime when external data changes have been found
   */
  lastExternalChangeFoundDate?: string;
  /**
   * The number of synchronizations performed so far
   */
  numberOfSyncs?: number;
  propertiesToSync?: LocationListingServicePropertiesToSync;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ConnectionSyncSettingsObjectType)[keyof typeof ConnectionSyncSettingsObjectType];
};
