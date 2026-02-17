import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';

export const LocationsObjectType = {
  App_Domain_Presence_Entities_Locations_Locations: 'App\\Domain\\Presence\\Entities\\Locations\\Locations',
};

export const LocationsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Locations: 'App\\Domain\\Presence\\Entities\\Locations\\Locations',
} as const;

export type Locations = {
  elements?: Location[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationsObjectType)[keyof typeof LocationsObjectType];
};
