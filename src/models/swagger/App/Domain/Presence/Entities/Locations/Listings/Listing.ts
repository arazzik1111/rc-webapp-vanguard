import { Directory } from '@models/swagger/App/Domain/Presence/Entities/Directories/Directory';
import { DirectoryEngineStatus } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryEngineStatus';
import { DirectoryListingErrors } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryListingErrors';
import { DirectoryReviewsEngineStatus } from '@models/swagger/App/Domain/Presence/Entities/Directories/DirectoryReviewsEngineStatus';
import { ListingDataDivergencies } from '@models/swagger/App/Domain/Presence/Entities/Locations/Listings/DataDivergencies/ListingDataDivergencies';

export const ListingSyncStatus = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
  NOT_FOUND: 'NOT_FOUND',
  NO_ONLINE_LISTING: 'NO_ONLINE_LISTING',
};

export const ListingSyncStatusStrict = {
  IN_SYNC: 'IN_SYNC',
  NOT_IN_SYNC: 'NOT_IN_SYNC',
  NOT_FOUND: 'NOT_FOUND',
  NO_ONLINE_LISTING: 'NO_ONLINE_LISTING',
} as const;

export const ListingClaimStatus = {
  CLAIMABLE: 'CLAIMABLE',
  CLAIMED: 'CLAIMED',
  CLAIMED_BY_OTHERS: 'CLAIMED_BY_OTHERS',
  NOT_CLAIMABLE: 'NOT_CLAIMABLE',
  UNKNOWN: 'UNKNOWN',
  UNSUPPORTED_BUSINESS_CATEGORY: 'UNSUPPORTED_BUSINESS_CATEGORY',
};

export const ListingClaimStatusStrict = {
  CLAIMABLE: 'CLAIMABLE',
  CLAIMED: 'CLAIMED',
  CLAIMED_BY_OTHERS: 'CLAIMED_BY_OTHERS',
  NOT_CLAIMABLE: 'NOT_CLAIMABLE',
  UNKNOWN: 'UNKNOWN',
  UNSUPPORTED_BUSINESS_CATEGORY: 'UNSUPPORTED_BUSINESS_CATEGORY',
} as const;

export const ListingDirectoryStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
};

export const ListingDirectoryStatusStrict = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

export const ListingConnectStatus = {
  CONNECTED: 'CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
  NOT_NEEDED: 'NOT_NEEDED',
};

export const ListingConnectStatusStrict = {
  CONNECTED: 'CONNECTED',
  NOT_CONNECTED: 'NOT_CONNECTED',
  NOT_NEEDED: 'NOT_NEEDED',
} as const;

export const ListingDataSource = {
  LISTING_SERVICE: 'LISTING_SERVICE',
  DIRECTORY_CHECKER: 'DIRECTORY_CHECKER',
};

export const ListingDataSourceStrict = {
  LISTING_SERVICE: 'LISTING_SERVICE',
  DIRECTORY_CHECKER: 'DIRECTORY_CHECKER',
} as const;

export const ListingObjectType = {
  App_Domain_Presence_Entities_Locations_Listings_Listing:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\Listing',
};

export const ListingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Listings_Listing:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\Listing',
} as const;

export type Listing = {
  /**
   * the external id of the directory provider
   */
  externalId?: string;
  directory?: Directory;
  /**
   * the public url of the listing
   */
  listingUrl?: string;
  /**
   * The last time a successful sync has been performed
   */
  lastSuccessfulUpdate?: string;
  /**
   * The last time the business listing has been checked
   */
  lastChecked?: string;
  directoryListingErrors?: DirectoryListingErrors;
  /**
   * the synchronization status of the business listing
   *  Allowed Values:
   * -   `IN_SYNC`: Data on Listing is fully in sync with Location data
   * -   `NOT_IN_SYNC`: Data on Listing is not fully in sync with Location data
   * -   `NOT_FOUND`: No Listing has been found for Location
   * -   `NO_ONLINE_LISTING`: The Directory is no online Directory, e.g. navigation systems, this means that data verification is not possible
   *
   */
  syncStatus?: (typeof ListingSyncStatus)[keyof typeof ListingSyncStatus];
  /**
   * the claim status of the business listing (some listings can claimed only by one owner, this depcits if we claimed it or others).
   * If claimable, only the party who claimed it is allowed to perform actions on the listing.
   *  Allowed Values:
   * -   `CLAIMABLE`: Directory supports claiming and Listing could be claimed as it is not claimed by others
   * -   `CLAIMED`: Directory supports claiming and Listing is claimed
   * -   `CLAIMED_BY_OTHERS`: Directory supports claiming and the listing is claimed by others so not claimable at the moment
   * -   `NOT_CLAIMABLE`: Directory does not support claiming
   * -   `UNKNOWN`: Claim status is not known
   * -   `UNSUPPORTED_BUSINESS_CATEGORY`: The business directory supports only certain business categories and the company's categories are not supported.
   *
   */
  claimStatus?: (typeof ListingClaimStatus)[keyof typeof ListingClaimStatus];
  /**
   * whether the directory is active or not
   *  Allowed Values:
   * -   `ACTIVE`: Directory is active
   * -   `INACTIVE`: Directory is not active anymore
   *
   */
  directoryStatus?: (typeof ListingDirectoryStatus)[keyof typeof ListingDirectoryStatus];
  /**
   * the current connectivity status of the directory
   *  Allowed Values:
   * -   `CONNECTED`: Listing is connected, means that it can be managed
   * -   `NOT_CONNECTED`: Listing is not connected
   * -   `NOT_NEEDED`: Directory does not require to connect Listings
   *
   */
  connectStatus?: (typeof ListingConnectStatus)[keyof typeof ListingConnectStatus];
  /**
   * The source where the Listing data is obtained from
   *  Allowed Values:
   * -   `LISTING_SERVICE`: The data about the Listing is coming from ListingService
   * -   `DIRECTORY_CHECKER`: The data about the Listing is coming from Argus directory checker
   *
   */
  dataSource?: (typeof ListingDataSource)[keyof typeof ListingDataSource];
  dataDivergencies?: ListingDataDivergencies;
  directoryEngineStatus?: DirectoryEngineStatus;
  directoryReviewsEngineStatus?: DirectoryReviewsEngineStatus;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingObjectType)[keyof typeof ListingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
