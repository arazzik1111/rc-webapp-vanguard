import { TargetLocation } from '@models/swagger/App/Domain/Ads/Entities/Settings/TargetLocation';

export const TargetLocationsObjectType = {
  App_Domain_Ads_Entities_Settings_TargetLocations: 'App\\Domain\\Ads\\Entities\\Settings\\TargetLocations',
};

export const TargetLocationsObjectTypeStrict = {
  App_Domain_Ads_Entities_Settings_TargetLocations: 'App\\Domain\\Ads\\Entities\\Settings\\TargetLocations',
} as const;

export type TargetLocations = {
  /**
   * The target Radius set for the Ad account
   */
  radius?: number;
  /**
   * A variable that controls whether the user's target location is local or nationwide
   */
  isLocallyFocused?: boolean;
  elements?: TargetLocation[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof TargetLocationsObjectType)[keyof typeof TargetLocationsObjectType];
};
