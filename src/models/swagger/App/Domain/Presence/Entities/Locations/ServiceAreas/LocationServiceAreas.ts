import { ServiceAreas } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/ServiceAreas/ServiceAreas';
import { LocationServiceArea } from '@models/swagger/App/Domain/Presence/Entities/Locations/ServiceAreas/LocationServiceArea';

export const LocationServiceAreasServiceAreaType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const LocationServiceAreasServiceAreaTypeStrict = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
} as const;

export const LocationServiceAreasObjectType = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_LocationServiceAreas:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\LocationServiceAreas',
};

export const LocationServiceAreasObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_LocationServiceAreas:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\LocationServiceAreas',
} as const;

export type LocationServiceAreas = {
  /**
   * The Areas the business provides it's services, limited to 20
   */
  elements?: LocationServiceArea[];
  /**
   * Indicates whether this business offers services only onsite at a customer location or not
   *  Allowed Values:
   * -   `BUSINESS_TYPE_UNSPECIFIED`
   * -   `CUSTOMER_LOCATION_ONLY`
   * -   `CUSTOMER_AND_BUSINESS_LOCATION`
   *
   */
  serviceAreaType?: (typeof LocationServiceAreasServiceAreaType)[keyof typeof LocationServiceAreasServiceAreaType];
  serviceAreas?: ServiceAreas;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationServiceAreasObjectType)[keyof typeof LocationServiceAreasObjectType];
};
