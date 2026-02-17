import { AdsSetting } from '@models/swagger/App/Domain/Ads/Entities/Settings/AdsSetting';
import { AgencyRightsSetting } from '@models/swagger/App/Domain/Agency/Entities/Settings/AgencyRightsSetting';
import { PresenceSetting } from '@models/swagger/App/Domain/Presence/Entities/Settings/PresenceSetting';
import { SeoSetting } from '@models/swagger/App/Domain/Seo/Entities/Settings/SeoSetting';
import { SetupSetting } from '@models/swagger/App/Domain/Setup/Entities/Settings/SetupSetting';

export const FeatureSettingsObjectType = {
  App_Domain_Product_Entities_Features_FeatureSettings: 'App\\Domain\\Product\\Entities\\Features\\FeatureSettings',
};

export const FeatureSettingsObjectTypeStrict = {
  App_Domain_Product_Entities_Features_FeatureSettings: 'App\\Domain\\Product\\Entities\\Features\\FeatureSettings',
} as const;

export type FeatureSettings = {
  elements?: Array<AdsSetting | PresenceSetting | SeoSetting | SetupSetting | AgencyRightsSetting>;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureSettingsObjectType)[keyof typeof FeatureSettingsObjectType];
};
