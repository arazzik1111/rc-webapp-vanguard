export const OperatingAreaObjectType = {
  App_Domain_Ads_Entities_Settings_OperatingArea: 'App\\Domain\\Ads\\Entities\\Settings\\OperatingArea',
};

export type OperatingArea = {
  /**
   * The name of the location
   */
  location?: string;
  /**
   * The latitude of the locations
   */
  latitude?: number;
  /**
   * The longitude of the location
   */
  longitude?: number;
  /**
   * Whether the location is a country or not
   */
  isCountry?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OperatingAreaObjectType)[keyof typeof OperatingAreaObjectType];
};
