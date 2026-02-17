import { GeoPoint } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPoint';

export const GeoBoundsObjectType = {
  App_Domain_Common_Entities_GeoEntities_GeoBounds: 'App\\Domain\\Common\\Entities\\GeoEntities\\GeoBounds',
};

export const GeoBoundsObjectTypeStrict = {
  App_Domain_Common_Entities_GeoEntities_GeoBounds: 'App\\Domain\\Common\\Entities\\GeoEntities\\GeoBounds',
} as const;

export type GeoBounds = {
  northeast?: GeoPoint;
  southwest?: GeoPoint;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GeoBoundsObjectType)[keyof typeof GeoBoundsObjectType];
};
