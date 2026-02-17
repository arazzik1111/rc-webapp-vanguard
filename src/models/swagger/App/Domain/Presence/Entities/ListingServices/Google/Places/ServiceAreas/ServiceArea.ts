import { GeoBounds } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoBounds';
import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';

export const ServiceAreaType = {
  country: 'country',
  administrative_area_level_1: 'administrative_area_level_1',
  administrative_area_level_2: 'administrative_area_level_2',
  administrative_area_level_3: 'administrative_area_level_3',
  locality: 'locality',
  postal_code: 'postal_code',
  postal_town: 'postal_town',
  sublocality: 'sublocality',
  sublocality_level_1: 'sublocality_level_1',
  neighborhood: 'neighborhood',
};

export const ServiceAreaTypeStrict = {
  country: 'country',
  administrative_area_level_1: 'administrative_area_level_1',
  administrative_area_level_2: 'administrative_area_level_2',
  administrative_area_level_3: 'administrative_area_level_3',
  locality: 'locality',
  postal_code: 'postal_code',
  postal_town: 'postal_town',
  sublocality: 'sublocality',
  sublocality_level_1: 'sublocality_level_1',
  neighborhood: 'neighborhood',
} as const;

export const ServiceAreaObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_ServiceAreas_ServiceArea:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\ServiceAreas\\ServiceArea',
};

export const ServiceAreaObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_ServiceAreas_ServiceArea:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\ServiceAreas\\ServiceArea',
} as const;

export type ServiceArea = {
  /**
   * Google Place ID, not to be confused with Google Maps ID (cid) or Google My Business / Google Business Profile ID
   */
  googlePlaceId?: string;
  /**
   * The type of Place. The place type is made of type components by a custom logic.
   *  Allowed Values:
   * -   `country`
   * -   `administrative_area_level_1`
   * -   `administrative_area_level_2`
   * -   `administrative_area_level_3`
   * -   `locality`
   * -   `postal_code`
   * -   `postal_town`
   * -   `sublocality`
   * -   `sublocality_level_1`
   * -   `neighborhood`
   *
   */
  type?: (typeof ServiceAreaType)[keyof typeof ServiceAreaType];
  center?: GeoPoint;
  bounds?: GeoBounds;
  /**
   * Name of the place composed of Regions, e.g. Handorf, Münster, Deutschland
   */
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ServiceAreaObjectType)[keyof typeof ServiceAreaObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
