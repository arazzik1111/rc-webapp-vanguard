export const PartnerWebsiteURLsSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerWebsiteURLsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerWebsiteURLsSetting',
};

export const PartnerWebsiteURLsSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerWebsiteURLsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerWebsiteURLsSetting',
} as const;

export type PartnerWebsiteURLsSetting = {
  /**
   * URL to legal data on the reseller's website
   */
  legalDataURL?: string;
  /**
   * URL to terms and conditions (German AGB) on the reseller's website
   */
  termsAndConditionsURL?: string;
  /**
   * URL to customer support on the reseller's website
   */
  customerSupportURL?: string;
  /**
   * URL to manage email/notification settings on the reseller's website
   */
  manageNotificationURL?: string;
  /**
   * URL to privacy policy on the reseller's website
   */
  privacyURL?: string;
  /**
   * URL to the news or blog page on the reseller's website
   */
  blogOrNewsURL?: string;
  /**
   * URL to the about page on the reseller's website
   */
  aboutURL?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerWebsiteURLsSettingObjectType)[keyof typeof PartnerWebsiteURLsSettingObjectType];
};
