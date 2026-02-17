import { Domains } from '@models/swagger/App/Domain/Seo/Entities/Domains/Domains';

export const AccountSetupPresetsSettingObjectType = {
  App_Domain_Partner_Entities_Settings_AccountSetupPresetsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\AccountSetupPresetsSetting',
};

export const AccountSetupPresetsSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_AccountSetupPresetsSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\AccountSetupPresetsSetting',
} as const;

export type AccountSetupPresetsSetting = {
  presetDomains?: Domains;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountSetupPresetsSettingObjectType)[keyof typeof AccountSetupPresetsSettingObjectType];
};
