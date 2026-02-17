import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';

export const GeoPointObjectType = {
  App_Domain_Common_Entities_GeoEntities_GeoPoint: 'App\\Domain\\Common\\Entities\\GeoEntities\\GeoPoint',
};

export const GeoPointObjectTypeStrict = {
  App_Domain_Common_Entities_GeoEntities_GeoPoint: 'App\\Domain\\Common\\Entities\\GeoEntities\\GeoPoint',
} as const;

export type GeoPoint = {
  /**
   * Geographical latitude
   */
  lat?: number;
  /**
   * Geographical longitude
   */
  lng?: number;
  reverseGeocodedAddress?: PostalAddress;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GeoPointObjectType)[keyof typeof GeoPointObjectType];
};
