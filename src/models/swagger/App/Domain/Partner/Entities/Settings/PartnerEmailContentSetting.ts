export const PartnerEmailContentSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerEmailContentSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerEmailContentSetting',
};

export type PartnerEmailContentSetting = {
  /**
   * If true, custom block content system is in use and mail content is replaced by partner specific blocks
   */
  usesCustomBlockContent?: boolean;
  /**
   * If true, the header section is replaced
   */
  replaceHeader?: boolean;
  /**
   * If true, the content bottom section is replaced
   */
  replaceContentBottom?: boolean;
  /**
   * If true, the content replacement system is also used on auto activation mails
   */
  useBlockReplacementOnAutoActivation?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerEmailContentSettingObjectType)[keyof typeof PartnerEmailContentSettingObjectType];
};
