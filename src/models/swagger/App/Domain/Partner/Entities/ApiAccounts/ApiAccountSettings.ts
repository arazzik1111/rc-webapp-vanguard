import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { TranslationsSetting } from '@models/swagger/App/Domain/Common/Entities/Settings/TranslationsSetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { PartnerSeoAnalysisSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerSeoAnalysisSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { UpsellingSetting } from '@models/swagger/App/Domain/Product/Entities/Settings/UpsellingSetting';
import { RadarSetting } from '@models/swagger/App/Domain/Radar/Entities/Settings/RadarSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const ApiAccountSettingsObjectType = {
  App_Domain_Partner_Entities_ApiAccounts_ApiAccountSettings:
    'App\\Domain\\Partner\\Entities\\ApiAccounts\\ApiAccountSettings',
};

export const ApiAccountSettingsObjectTypeStrict = {
  App_Domain_Partner_Entities_ApiAccounts_ApiAccountSettings:
    'App\\Domain\\Partner\\Entities\\ApiAccounts\\ApiAccountSettings',
} as const;

export type ApiAccountSettings = {
  elements?: Array<
    | PartnerProductSetting
    | AdsSetting
    | PresenceSetting
    | SeoSetting
    | SetupSetting
    | PartnerEmailSetting
    | RadarSetting
    | TranslationsSetting
    | PartnerSeoAnalysisSetting
    | UpsellingSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ApiAccountSettingsObjectType)[keyof typeof ApiAccountSettingsObjectType];
};
