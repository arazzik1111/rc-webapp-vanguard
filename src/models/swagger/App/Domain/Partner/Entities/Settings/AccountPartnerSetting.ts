import { UpsellingSetting } from '@models/swagger/App/Domain/Product/Entities/Settings/UpsellingSetting';

export const AccountPartnerSettingObjectType = {
  App_Domain_Partner_Entities_Settings_AccountPartnerSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\AccountPartnerSetting',
};

export const AccountPartnerSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_AccountPartnerSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\AccountPartnerSetting',
} as const;

export type AccountPartnerSetting = {
  upsellingSetting?: UpsellingSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountPartnerSettingObjectType)[keyof typeof AccountPartnerSettingObjectType];
};
