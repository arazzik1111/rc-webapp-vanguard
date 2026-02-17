import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';
import { GeoPointBounds } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPointBounds';

export const GeoPointGeometryObjectType = {
  App_Domain_Common_Entities_GeoEntities_GeoPointGeometry:
    'App\\Domain\\Common\\Entities\\GeoEntities\\GeoPointGeometry',
};

export type GeoPointGeometry = {
  bounds?: GeoPointBounds;
  location?: GeoPoint;
  locationType?: string;
  viewport?: GeoPointBounds;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GeoPointGeometryObjectType)[keyof typeof GeoPointGeometryObjectType];
};
