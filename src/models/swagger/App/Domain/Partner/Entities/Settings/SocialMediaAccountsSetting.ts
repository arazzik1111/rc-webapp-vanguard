export const SocialMediaAccountsSettingObjectType = {
  App_Domain_Partner_Entities_Settings_SocialMediaAccountsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\SocialMediaAccountsSetting',
};

export const SocialMediaAccountsSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_SocialMediaAccountsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\SocialMediaAccountsSetting',
} as const;

export type SocialMediaAccountsSetting = {
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
  objectType: (typeof SocialMediaAccountsSettingObjectType)[keyof typeof SocialMediaAccountsSettingObjectType];
};
