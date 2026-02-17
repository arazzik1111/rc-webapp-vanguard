import { ServiceArea } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/ServiceAreas/ServiceArea';
import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';

export const LocationServiceAreaObjectType = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_LocationServiceArea:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\LocationServiceArea',
};

export const LocationServiceAreaObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_LocationServiceArea:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\LocationServiceArea',
} as const;

export type LocationServiceArea = {
  /**
   * The id of the associated Location
   */
  locationId?: number;
  /**
   * The id of the associated ServiceArea
   */
  serviceAreaId?: number;
  serviceArea?: ServiceArea;
  location?: Location;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationServiceAreaObjectType)[keyof typeof LocationServiceAreaObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
