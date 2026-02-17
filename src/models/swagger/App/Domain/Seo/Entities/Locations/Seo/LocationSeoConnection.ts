import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { GoogleAnalyticsConnection } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Connection/GoogleAnalyticsConnection';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const LocationSeoConnectionType = {
  analytics: 'analytics',
  search_console: 'search_console',
};

export const LocationSeoConnectionTypeStrict = {
  analytics: 'analytics',
  search_console: 'search_console',
} as const;

export const LocationSeoConnectionObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeoConnection:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeoConnection',
};

export const LocationSeoConnectionObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeoConnection:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeoConnection',
} as const;

export type LocationSeoConnection = {
  /**
   * ID of Location associated to Analytics
   */
  locationId?: number;
  location?: Location;
  /**
   * type of Seo data associated to Location
   *  Allowed Values:
   * -   `analytics`: Identifier for Analytics connection type
   * -   `search_console`: Identifier for Search Console connection type
   *
   */
  type?: (typeof LocationSeoConnectionType)[keyof typeof LocationSeoConnectionType];
  connectionSettings?: GoogleAnalyticsConnection;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationSeoConnectionObjectType)[keyof typeof LocationSeoConnectionObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
