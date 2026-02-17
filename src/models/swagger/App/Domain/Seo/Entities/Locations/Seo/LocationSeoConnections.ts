import { LocationSeoConnection } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/LocationSeoConnection';

export const LocationSeoConnectionsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeoConnections:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeoConnections',
};

export const LocationSeoConnectionsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_LocationSeoConnections:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\LocationSeoConnections',
} as const;

export type LocationSeoConnections = {
  elements?: LocationSeoConnection[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationSeoConnectionsObjectType)[keyof typeof LocationSeoConnectionsObjectType];
};
