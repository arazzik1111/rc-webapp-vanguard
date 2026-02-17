import { PartnerPerCountrySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerPerCountrySetting';

export const PartnerPerCountrySettingsObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerPerCountrySettings:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerPerCountrySettings',
};

export type PartnerPerCountrySettings = {
  elements?: PartnerPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerPerCountrySettingsObjectType)[keyof typeof PartnerPerCountrySettingsObjectType];
};
