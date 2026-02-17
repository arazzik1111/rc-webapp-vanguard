import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';

export const GeoPointBoundsObjectType = {
  App_Domain_Common_Entities_GeoEntities_GeoPointBounds: 'App\\Domain\\Common\\Entities\\GeoEntities\\GeoPointBounds',
};

export type GeoPointBounds = {
  northeast?: GeoPoint;
  southwest?: GeoPoint;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GeoPointBoundsObjectType)[keyof typeof GeoPointBoundsObjectType];
};
