import { ServiceArea } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Places/ServiceAreas/ServiceArea';

export const ServiceAreasObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_ServiceAreas_ServiceAreas:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\ServiceAreas\\ServiceAreas',
};

export const ServiceAreasObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Places_ServiceAreas_ServiceAreas:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Places\\ServiceAreas\\ServiceAreas',
} as const;

export type ServiceAreas = {
  elements?: ServiceArea[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ServiceAreasObjectType)[keyof typeof ServiceAreasObjectType];
};
