import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { AIBudgetSetting } from '@models/swagger/App/Domain/AI/Entities/Settings/AIBudgetSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { UpsellingSetting } from '@models/swagger/App/Domain/Product/Entities/Settings/UpsellingSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const ProductRatePlanSettingsObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlanSettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlanSettings',
};

export const ProductRatePlanSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlanSettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlanSettings',
} as const;

export type ProductRatePlanSettings = {
  elements?: Array<
    | PartnerProductSetting
    | AdsSetting
    | PresenceSetting
    | SeoSetting
    | SetupSetting
    | UpsellingSetting
    | AIBudgetSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanSettingsObjectType)[keyof typeof ProductRatePlanSettingsObjectType];
};
