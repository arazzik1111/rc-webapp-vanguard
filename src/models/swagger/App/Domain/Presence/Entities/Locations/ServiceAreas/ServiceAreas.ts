import { ServiceArea } from '@models/swagger/App/Domain/Presence/Entities/Locations/ServiceAreas/ServiceArea';

export const ServiceAreasBusinessType = {
  BUSINESS_TYPE_UNSPECIFIED: 'BUSINESS_TYPE_UNSPECIFIED',
  CUSTOMER_LOCATION_ONLY: 'CUSTOMER_LOCATION_ONLY',
  CUSTOMER_AND_BUSINESS_LOCATION: 'CUSTOMER_AND_BUSINESS_LOCATION',
};

export const ServiceAreasObjectType = {
  App_Domain_Presence_Entities_Locations_ServiceAreas_ServiceAreas:
    'App\\Domain\\Presence\\Entities\\Locations\\ServiceAreas\\ServiceAreas',
};

export type ServiceAreas = {
  /**
   * The Areas the business provides it's services, limited to 20
   */
  elements?: ServiceArea[];
  /**
   * Indicates whether this business only offers services onsite at a customer location (for example, a tow truck), or at both an address and onsite (for example, a pizza store with a dining area, that also delivers to customers)
   *  Allowed Values:
   * -   `BUSINESS_TYPE_UNSPECIFIED`: Output only. Not specified.
   * -   `CUSTOMER_LOCATION_ONLY`: Offers service only in the surrounding area (not at the business address)
   * -   `CUSTOMER_AND_BUSINESS_LOCATION`: Offers service at the business address and the surrounding area
   *
   */
  businessType?: (typeof ServiceAreasBusinessType)[keyof typeof ServiceAreasBusinessType];
  isLocallyFocused?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ServiceAreasObjectType)[keyof typeof ServiceAreasObjectType];
};
