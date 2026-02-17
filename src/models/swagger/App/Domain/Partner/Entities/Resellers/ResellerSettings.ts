import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { TranslationsSetting } from '@models/swagger/App/Domain/Common/Entities/Settings/TranslationsSetting';
import { PartnerCompanySetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerCompanySetting';
import { PartnerEmailSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerEmailSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { PartnerSeoAnalysisSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerSeoAnalysisSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { UpsellingSetting } from '@models/swagger/App/Domain/Product/Entities/Settings/UpsellingSetting';
import { RadarSetting } from '@models/swagger/App/Domain/Radar/Entities/Settings/RadarSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const ResellerSettingsObjectType = {
  App_Domain_Partner_Entities_Resellers_ResellerSettings: 'App\\Domain\\Partner\\Entities\\Resellers\\ResellerSettings',
};

export const ResellerSettingsObjectTypeStrict = {
  App_Domain_Partner_Entities_Resellers_ResellerSettings: 'App\\Domain\\Partner\\Entities\\Resellers\\ResellerSettings',
} as const;

export type ResellerSettings = {
  elements?: Array<
    | PartnerCompanySetting
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
  objectType: (typeof ResellerSettingsObjectType)[keyof typeof ResellerSettingsObjectType];
};
