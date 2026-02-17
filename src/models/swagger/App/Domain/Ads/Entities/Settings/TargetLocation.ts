export const TargetLocationObjectType = {
  App_Domain_Ads_Entities_Settings_TargetLocation: 'App\\Domain\\Ads\\Entities\\Settings\\TargetLocation',
};

export const TargetLocationObjectTypeStrict = {
  App_Domain_Ads_Entities_Settings_TargetLocation: 'App\\Domain\\Ads\\Entities\\Settings\\TargetLocation',
} as const;

export type TargetLocation = {
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
  objectType: (typeof TargetLocationObjectType)[keyof typeof TargetLocationObjectType];
};
