export const PartnerProductPerCountrySettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerProductPerCountrySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerProductPerCountrySetting',
};

export const PartnerProductPerCountrySettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerProductPerCountrySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerProductPerCountrySetting',
} as const;

export type PartnerProductPerCountrySetting = {
  /**
   * External Id provided by partner for upselling purposes
   */
  externalId?: string;
  /**
   * The URL for logout
   */
  logoutUrl?: string;
  /**
   * The URL for the product
   */
  productUrl?: string;
  /**
   * The short code for the country, e.g. DE
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerProductPerCountrySettingObjectType)[keyof typeof PartnerProductPerCountrySettingObjectType];
};
