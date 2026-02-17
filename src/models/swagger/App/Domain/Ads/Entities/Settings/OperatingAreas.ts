import { OperatingArea } from '@models/swagger/App/Domain/Ads/Entities/Settings/OperatingArea';

export const OperatingAreasObjectType = {
  App_Domain_Ads_Entities_Settings_OperatingAreas: 'App\\Domain\\Ads\\Entities\\Settings\\OperatingAreas',
};

export type OperatingAreas = {
  /**
   * The target Radius set for the Ad account
   */
  radius?: number;
  /**
   * A variable that controls whether the user's target location is local or nationwide
   */
  isLocallyFocused?: boolean;
  elements?: OperatingArea[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OperatingAreasObjectType)[keyof typeof OperatingAreasObjectType];
};
