import { FacebookConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/FacebookConnectionProfile';
import { GoogleConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Connection/GoogleConnectionProfile';
import { LinkedinConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/LinkedinConnectionProfile';
import { LinkedinConnectionToken } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/Token/LinkedinConnectionToken';
import { UberallConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/Locations/Connection/UberallConnectionProfile';
import { YextConnectionProfile } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Connection/YextConnectionProfile';
import { ConnectionSyncSettings } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/ConnectionSyncSettings';
import { PublishingListingErrors } from '@models/swagger/App/Domain/Presence/Entities/Locations/ListingServices/Connection/PublishingListingErrors';

export const LinkedinConnectionConnectionState = {
  CONNECTED: 'CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
  ACCOUNT_CONNECTED: 'ACCOUNT_CONNECTED',
  IN_PROGRESS: 'IN_PROGRESS',
};

export const LinkedinConnectionConnectionStateStrict = {
  CONNECTED: 'CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
  ACCOUNT_CONNECTED: 'ACCOUNT_CONNECTED',
  IN_PROGRESS: 'IN_PROGRESS',
} as const;

export const LinkedinConnectionConnectionType = {
  SERIVCE_API: 'SERIVCE_API',
  TOKEN: 'TOKEN',
  SELF_MANAGED: 'SELF_MANAGED',
  NONE: 'NONE',
};

export const LinkedinConnectionConnectionTypeStrict = {
  SERIVCE_API: 'SERIVCE_API',
  TOKEN: 'TOKEN',
  SELF_MANAGED: 'SELF_MANAGED',
  NONE: 'NONE',
} as const;

export const LinkedinConnectionProfileState = {
  UNKNOWN: 'UNKNOWN',
  FULLY_OPERATIONAL: 'FULLY_OPERATIONAL',
  NOT_CREATED: 'NOT_CREATED',
  IN_CREATION: 'IN_CREATION',
  VERIFICATION_PENDING: 'VERIFICATION_PENDING',
  IN_REVIEW: 'IN_REVIEW',
  SUSPENDED: 'SUSPENDED',
  DISABLED: 'DISABLED',
  DUPLICATE: 'DUPLICATE',
  CANCELLED: 'CANCELLED',
  INACTIVE: 'INACTIVE',
  CLOSED_TEMPORARILY: 'CLOSED_TEMPORARILY',
  PERMANENTLY_CLOSED: 'PERMANENTLY_CLOSED',
  LIMITS_EXCEEDED: 'LIMITS_EXCEEDED',
};

export const LinkedinConnectionProfileStateStrict = {
  UNKNOWN: 'UNKNOWN',
  FULLY_OPERATIONAL: 'FULLY_OPERATIONAL',
  NOT_CREATED: 'NOT_CREATED',
  IN_CREATION: 'IN_CREATION',
  VERIFICATION_PENDING: 'VERIFICATION_PENDING',
  IN_REVIEW: 'IN_REVIEW',
  SUSPENDED: 'SUSPENDED',
  DISABLED: 'DISABLED',
  DUPLICATE: 'DUPLICATE',
  CANCELLED: 'CANCELLED',
  INACTIVE: 'INACTIVE',
  CLOSED_TEMPORARILY: 'CLOSED_TEMPORARILY',
  PERMANENTLY_CLOSED: 'PERMANENTLY_CLOSED',
  LIMITS_EXCEEDED: 'LIMITS_EXCEEDED',
} as const;

export const LinkedinConnectionSyncState = {
  IN_SYNC: 'IN_SYNC',
  NEVER_SYNCED: 'NEVER_SYNCED',
  OUT_OF_SYNC: 'OUT_OF_SYNC',
};

export const LinkedinConnectionSyncStateStrict = {
  IN_SYNC: 'IN_SYNC',
  NEVER_SYNCED: 'NEVER_SYNCED',
  OUT_OF_SYNC: 'OUT_OF_SYNC',
} as const;

export const LinkedinConnectionObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_LinkedinConnection:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\LinkedinConnection',
};

export const LinkedinConnectionObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_LinkedinConnection:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\LinkedinConnection',
} as const;

export type LinkedinConnection = {
  connectionToken?: LinkedinConnectionToken;
  /**
   * The Linkedin token connect flow init URL
   */
  linkedinTokenConnectFlowInitUrl?: string;
  /**
   * The status of the co#nnection
   *  Allowed Values:
   * -   `CONNECTED`: ListingService Location is connected, always true in case of SERVICE_API
   * -   `NOT_CONNECTED`: ListingService Location is not connected
   * -   `ACCOUNT_CONNECTED`: ListingService is connected (by token) but Location is not selected
   * -   `IN_PROGRESS`: ListingService Location does not exist. We are in the process of creating it
   * Case: Facebook => after init we save some info in connection settings
   *
   */
  connectionState?: (typeof LinkedinConnectionConnectionState)[keyof typeof LinkedinConnectionConnectionState];
  /**
   * The way, the ListingService is conencted
   *  Allowed Values:
   * -   `SERIVCE_API`: Connection is performed through ListingService API, e.g. Uberall or Yext
   * -   `TOKEN`: Connection is performed through TOKEN, e.g. in case of GMB or facebook
   * -   `SELF_MANAGED`: Connection is managed by us (Argus), e.g. in case of GMB accounts created in managed account or in case of X connection
   * -   `NONE`: Connection is managed by us (Argus), e.g. in case of GMB accounts created in managed account
   *
   */
  connectionType?: (typeof LinkedinConnectionConnectionType)[keyof typeof LinkedinConnectionConnectionType];
  /**
   * The state of the Location profile on the ListingService
   *  Allowed Values:
   * -   `UNKNOWN`: Location profile is unknown since it is probably not created or not select from multiple profiles
   * -   `FULLY_OPERATIONAL`: Location profile is created, verified and in valid state
   * -   `NOT_CREATED`: Location profile is not yet created
   * -   `IN_CREATION`: Location profile is created, but verification is not started
   * -   `VERIFICATION_PENDING`: Location profile is created, verification started but not yet completed
   * -   `IN_REVIEW`: Location profile is created and verified and awaits completion of manual review (depending on business type can be instant or 1-2 days on Google), applies also to Yext (10 min - 1 day)
   * -   `SUSPENDED`: Location profile is suspended due to violations of guidelines
   * -   `DISABLED`: Location profile is disabled due to violations of guidelines, or verification of the profile failed, e.g. on Yext
   * -   `DUPLICATE`: Location profile duplicates another location that is in good standing
   * -   `CANCELLED`: Applies only to full listing services. A cancelled profile will be synced until the  end of the contract term. It will not be renewed. Once endDate is reached, location will switch to inactive
   * -   `INACTIVE`: Applies only to full listing services. Will not be synced anymore, claims of listings will be released where possible
   * -   `CLOSED_TEMPORARILY`: Indicates that the location has been temporarily closed
   * -   `PERMANENTLY_CLOSED`: Indicates that the location has been permanently closed
   * -   `LIMITS_EXCEEDED`: Location profile is created, verified but it was synced too many times in 24 hours
   *
   */
  profileState?: (typeof LinkedinConnectionProfileState)[keyof typeof LinkedinConnectionProfileState];
  /**
   * The sync state between location and ListingService
   *  Allowed Values:
   * -   `IN_SYNC`: Location is in sync with ListingService profile
   * -   `NEVER_SYNCED`: Location was never syned to ListingService profile
   * -   `OUT_OF_SYNC`: Location was syned to ListingService profile but is now out of sync
   *
   */
  syncState?: (typeof LinkedinConnectionSyncState)[keyof typeof LinkedinConnectionSyncState];
  /**
   * Set on disconnect with previews FbPage/GMB ID
   */
  prevConnectedExternalId?: string;
  /**
   * If true, data has been changed on ListingServiceLocation externally and requires sync
   */
  hasExternalDataChange?: boolean;
  /**
   * The number of times the connection was throttled
   */
  throttleTimeLeft?: number;
  /**
   * The last date when the location was fully connected
   */
  lastConnectionDate?: string;
  syncSettings?: ConnectionSyncSettings;
  /**
   * Profile contains all external ids or URLs to identify the Location on the ListingService
   */
  profile?:
    | GoogleConnectionProfile
    | UberallConnectionProfile
    | YextConnectionProfile
    | FacebookConnectionProfile
    | LinkedinConnectionProfile;
  publishingListingErrors?: PublishingListingErrors;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinConnectionObjectType)[keyof typeof LinkedinConnectionObjectType];
};
