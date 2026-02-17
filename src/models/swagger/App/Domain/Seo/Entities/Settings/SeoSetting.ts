import { SeoRankingsFeatureFlagSetting } from '@models/swagger/App/Domain/Seo/Entities/FeatureFlags/SeoRankingsFeatureFlagSetting';

export const SeoSettingObjectType = {
  App_Domain_Seo_Entities_Settings_SeoSetting: 'App\\Domain\\Seo\\Entities\\Settings\\SeoSetting',
};

export const SeoSettingObjectTypeStrict = {
  App_Domain_Seo_Entities_Settings_SeoSetting: 'App\\Domain\\Seo\\Entities\\Settings\\SeoSetting',
} as const;

export type SeoSetting = {
  seoRankingsFeatureFlagSetting?: SeoRankingsFeatureFlagSetting;
  /**
   * whether to display keyword visibilty comparison or not
   */
  displayKeywordVisibilityComparison?: boolean;
  /**
   * whether to display top keywords or not
   */
  displayTopKeywords?: boolean;
  /**
   * If true, custom CMSType order is defined for Reseller
   */
  hasCustomCMSTypeOrder?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SeoSettingObjectType)[keyof typeof SeoSettingObjectType];
};
