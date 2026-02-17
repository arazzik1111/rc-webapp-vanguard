import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { AgencyRightsSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/AgencyRightsSetting';
import { PartnerProductSetting } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const ProductRatePlanFeatureSettingsObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeatureSettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeatureSettings',
};

export const ProductRatePlanFeatureSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeatureSettings:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeatureSettings',
} as const;

export type ProductRatePlanFeatureSettings = {
  elements?: Array<
    PartnerProductSetting | AdsSetting | PresenceSetting | SeoSetting | SetupSetting | AgencyRightsSetting
  >;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeatureSettingsObjectType)[keyof typeof ProductRatePlanFeatureSettingsObjectType];
};
