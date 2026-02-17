export const PartnerPerCountrySettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerPerCountrySetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerPerCountrySetting',
};

export type PartnerPerCountrySetting = {
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
  objectType: (typeof PartnerPerCountrySettingObjectType)[keyof typeof PartnerPerCountrySettingObjectType];
};
