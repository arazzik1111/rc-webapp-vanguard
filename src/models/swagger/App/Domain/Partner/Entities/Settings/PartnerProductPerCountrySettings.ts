import { PartnerProductPerCountrySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductPerCountrySetting';

export const PartnerProductPerCountrySettingsObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerProductPerCountrySettings:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerProductPerCountrySettings',
};

export const PartnerProductPerCountrySettingsObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerProductPerCountrySettings:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerProductPerCountrySettings',
} as const;

export type PartnerProductPerCountrySettings = {
  elements?: PartnerProductPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerProductPerCountrySettingsObjectType)[keyof typeof PartnerProductPerCountrySettingsObjectType];
};
