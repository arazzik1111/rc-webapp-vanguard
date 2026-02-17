import { GoogleIds } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Common/GoogleIds';

export const ServiceAreaPlaceType = {
  country: 'country',
  administrative_area_level_1: 'administrative_area_level_1',
  administrative_area_level_2: 'administrative_area_level_2',
  locality: 'locality',
  sublocality: 'sublocality',
};

export const ServiceAreaObjectType = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_ServiceArea:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\ServiceArea',
};

export type ServiceArea = {
  /**
   * The localized name of the place. For example, Scottsdale, AZ
   */
  placeName?: string;
  /**
   *
   * Allowed Values:
   * -   `country`: Indicates the national political entity - Country
   * -   `administrative_area_level_1`: Indicates a first-order civil entity below the country level. US = State; RO = County
   * -   `administrative_area_level_2`: Indicates a second-order civil entity below the country level. US = County
   * -   `locality`: Indicates an incorporated city or town political entity
   * -   `sublocality`: Indicates a first-order civil entity below a locality.
   * For some locations may receive one of the additional types: sublocality_level_1 to sublocality_level_5.
   * Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
   *
   */
  placeType?: (typeof ServiceAreaPlaceType)[keyof typeof ServiceAreaPlaceType];
  googleIds?: GoogleIds;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ServiceAreaObjectType)[keyof typeof ServiceAreaObjectType];
};
