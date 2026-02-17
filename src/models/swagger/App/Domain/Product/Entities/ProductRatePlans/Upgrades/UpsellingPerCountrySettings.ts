import { UpsellingPerCountrySetting } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/UpsellingPerCountrySetting';

export const UpsellingPerCountrySettingsObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_UpsellingPerCountrySettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\UpsellingPerCountrySettings',
};

export const UpsellingPerCountrySettingsObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_UpsellingPerCountrySettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\UpsellingPerCountrySettings',
} as const;

export type UpsellingPerCountrySettings = {
  elements?: UpsellingPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UpsellingPerCountrySettingsObjectType)[keyof typeof UpsellingPerCountrySettingsObjectType];
};
