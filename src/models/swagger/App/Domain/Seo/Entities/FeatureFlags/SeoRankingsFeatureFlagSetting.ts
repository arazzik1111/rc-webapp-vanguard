export const SeoRankingsFeatureFlagSettingObjectType = {
  App_Domain_Seo_Entities_FeatureFlags_SeoRankingsFeatureFlagSetting:
    'App\\Domain\\Seo\\Entities\\FeatureFlags\\SeoRankingsFeatureFlagSetting',
};

export const SeoRankingsFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Seo_Entities_FeatureFlags_SeoRankingsFeatureFlagSetting:
    'App\\Domain\\Seo\\Entities\\FeatureFlags\\SeoRankingsFeatureFlagSetting',
} as const;

export type SeoRankingsFeatureFlagSetting = {
  /**
   * The number of keywords tracked and displayed
   */
  keywordsDisplayed?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SeoRankingsFeatureFlagSettingObjectType)[keyof typeof SeoRankingsFeatureFlagSettingObjectType];
};
