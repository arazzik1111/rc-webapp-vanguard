export const PartnerSocialMediaAccountsSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerSocialMediaAccountsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerSocialMediaAccountsSetting',
};

export type PartnerSocialMediaAccountsSetting = {
  /**
   * Partner's instagram URL
   */
  instagram?: string;
  /**
   * Partner's facebook URL
   */
  facebook?: string;
  /**
   * Partner's youttube URL
   */
  youtube?: string;
  /**
   * Partner's twitter / x URL
   */
  twitter?: string;
  /**
   * Partner's tiktok x URL
   */
  tiktok?: string;
  /**
   * Partner's linkedin URL
   */
  linkedin?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerSocialMediaAccountsSettingObjectType)[keyof typeof PartnerSocialMediaAccountsSettingObjectType];
};
