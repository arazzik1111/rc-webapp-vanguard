export const UpsellingPerCountrySettingObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_UpsellingPerCountrySetting:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\UpsellingPerCountrySetting',
};

export const UpsellingPerCountrySettingObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_UpsellingPerCountrySetting:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\UpsellingPerCountrySetting',
} as const;

export type UpsellingPerCountrySetting = {
  /**
   * The URL of the the customer should be redirected to, or the javascript that has to be executed on click
   */
  upsellingLink?: string;
  /**
   * The short code for the country, e.g. DE
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UpsellingPerCountrySettingObjectType)[keyof typeof UpsellingPerCountrySettingObjectType];
};
