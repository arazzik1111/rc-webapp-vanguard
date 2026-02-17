import { PartnerCompanyPerCountrySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanyPerCountrySetting';

export const PartnerCompanyPerCountrySettingsObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerCompanyPerCountrySettings:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanyPerCountrySettings',
};

export const PartnerCompanyPerCountrySettingsObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerCompanyPerCountrySettings:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerCompanyPerCountrySettings',
} as const;

export type PartnerCompanyPerCountrySettings = {
  elements?: PartnerCompanyPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerCompanyPerCountrySettingsObjectType)[keyof typeof PartnerCompanyPerCountrySettingsObjectType];
};
