import { ProductThemeSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/ProductThemeSetting';
import { TranslationsSetting } from '@models/swagger/App/Domain/Common/Entities/Settings/TranslationsSetting';
import { PartnerCompanySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanySetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';

export const AgencySettingsObjectType = {
  App_Domain_Agency_Entities_Settings_AgencySettings: 'App\\Domain\\Agency\\Entities\\Settings\\AgencySettings',
};

export const AgencySettingsObjectTypeStrict = {
  App_Domain_Agency_Entities_Settings_AgencySettings: 'App\\Domain\\Agency\\Entities\\Settings\\AgencySettings',
} as const;

export type AgencySettings = {
  elements?: Array<
    ProductThemeSetting | PartnerCompanySetting | PartnerProductSetting | PartnerEmailSetting | TranslationsSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AgencySettingsObjectType)[keyof typeof AgencySettingsObjectType];
};
