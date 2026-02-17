import { FacebookListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/FacebookListingService';
import { FacebookConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/Connection/FacebookConnection';
import { FacebookLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Facebook/Locations/FacebookLocation';
import { GoogleListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/GoogleListingService';
import { GoogleConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Connection/GoogleConnection';
import { GoogleLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/GoogleLocation';
import { LinkedinListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/LinkedinListingService';
import { LinkedinConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/Connection/LinkedinConnection';
import { LinkedInLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Linkedin/Locations/LinkedInLocation';
import { UberallConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/Locations/Connection/UberallConnection';
import { UberallLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/Locations/UberallLocation';
import { UberallListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Uberall/UberallListingService';
import { XConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/Connection/XConnection';
import { XLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/Locations/XLocation';
import { XListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/X/XListingService';
import { YextConnection } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/Connection/YextConnection';
import { YextLocation } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/Locations/YextLocation';
import { YextListingService } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Yext/YextListingService';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationListingServiceObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_LocationListingService:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\LocationListingService',
};

export const LocationListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_LocationListingService:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\LocationListingService',
} as const;

export type LocationListingService = {
  /**
   * ID of Location associated to ListingService
   */
  locationId?: number;
  /**
   * ID of ListingService associated to Location
   */
  listingServiceId?: number;
  /**
   * ListingService associated to Location
   */
  listingService?:
    | GoogleListingService
    | UberallListingService
    | YextListingService
    | FacebookListingService
    | LinkedinListingService
    | XListingService;
  /**
   * Location loaded from the particular ListingService
   */
  listingServiceLocation?:
    | GoogleLocation
    | UberallLocation
    | YextLocation
    | FacebookLocation
    | LinkedInLocation
    | XLocation;
  /**
   * All connection relevant information, state, profile, what is in sync, what is to be synced, connection type and credentials.
   */
  connectionSettings?:
    | GoogleConnection
    | UberallConnection
    | YextConnection
    | FacebookConnection
    | LinkedinConnection
    | XConnection;
  /**
   * Virtual column based on JSON content: connectionSettings.connectionToken.locationInfo.locationId
   */
  facebookLocationId?: string;
  /**
   * Virtual column based on JSON content: connectionSettings.connectionState
   */
  connectionState?: string;
  /**
   * Virtual column based on JSON content: connectionSettings.profileState
   */
  profileState?: string;
  /**
   * Virtual column based on JSON content: connectionSettings.syncState
   */
  syncState?: string;
  /**
   * Virtual column based on JSON content: connectionSettings.syncSettings.lastSyncDate
   */
  lastSyncDate?: string;
  /**
   * Virtual column based on JSON content: connectionSettings.syncSettings.nextCheckForExternalDataChangesDate
   */
  nextCheckForExternalDataChangesDate?: string;
  facebookAccountId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationListingServiceObjectType)[keyof typeof LocationListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
