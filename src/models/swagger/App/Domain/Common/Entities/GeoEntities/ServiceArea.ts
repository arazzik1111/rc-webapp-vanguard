import { GeoPointGeometry } from '@models/swagger/App/Domain/Common/Entities/GeoEntities/GeoPointGeometry';

export const ServiceAreaType = {
  country: 'country',
  administrative_area_level_1: 'administrative_area_level_1',
  administrative_area_level_2: 'administrative_area_level_2',
  administrative_area_level_3: 'administrative_area_level_3',
  locality: 'locality',
  sublocality: 'sublocality',
  neighborhood: 'neighborhood',
};

export const ServiceAreaObjectType = {
  App_Domain_Common_Entities_GeoEntities_ServiceArea: 'App\\Domain\\Common\\Entities\\GeoEntities\\ServiceArea',
};

export type ServiceArea = {
  /**
   * Google Place ID, not to be confused with Google Maps ID (cid) or Google My Business / Google Business Profile ID
   */
  googlePlaceId?: string;
  /**
   * The type of Place. The place type is made of type components by a custom logic.
   *  Allowed Values:
   * -   `country`: Indicates the national political entity - Country
   * -   `administrative_area_level_1`: Indicates a first-order civil entity below the country level. US = State; RO = County
   * -   `administrative_area_level_2`: Indicates a second-order civil entity below the administrative_area_level_1
   * -   `administrative_area_level_3`: Indicates a second-order civil entity below the administrative_area_level_2
   * -   `locality`: Indicates an incorporated city or town political entity
   * -   `sublocality`: Indicates a first-order civil entity below a locality.
   * For some locations may receive one of the additional types: sublocality_level_1 to sublocality_level_5.
   * Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
   * -   `neighborhood`: Indicates a neighborhood of a city/town entity
   *
   */
  type?: (typeof ServiceAreaType)[keyof typeof ServiceAreaType];
  /**
   * The country address component
   */
  country?: string;
  /**
   * The administrative_area_level_1 address component
   */
  administrativeAreaLevel1?: string;
  /**
   * The administrative_area_level_2 address component
   */
  administrativeAreaLevel2?: string;
  /**
   * The administrative_area_level_3 address component
   */
  administrativeAreaLevel3?: string;
  /**
   * The locality address component
   */
  locality?: string;
  /**
   * The sub-locality address component
   */
  sublocality?: string;
  /**
   * The neighborhood address component
   */
  neighborhood?: string;
  geometry?: GeoPointGeometry;
  name?: string;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ServiceAreaObjectType)[keyof typeof ServiceAreaObjectType];
};
