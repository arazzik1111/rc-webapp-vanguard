import { UpsellingSetting } from '@models/swagger/App/Domain/Product/Entities/Settings/UpsellingSetting';

export const AccountPartnerSettingObjectType = {
  App_Domain_Product_Entities_Accounts_AccountPartnerSetting:
    'App\\Domain\\Product\\Entities\\Accounts\\AccountPartnerSetting',
};

export type AccountPartnerSetting = {
  upsellingSetting?: UpsellingSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountPartnerSettingObjectType)[keyof typeof AccountPartnerSettingObjectType];
};
