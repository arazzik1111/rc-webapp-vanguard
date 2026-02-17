import { AdsGoogleCampaignBudgetFeatureFlagSetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/AdsGoogleCampaignBudgetFeatureFlagSetting';

export const AdsSettingObjectType = {
  App_Domain_Ads_Entities_Settings_AdsSetting: 'App\\Domain\\Ads\\Entities\\Settings\\AdsSetting',
};

export const AdsSettingObjectTypeStrict = {
  App_Domain_Ads_Entities_Settings_AdsSetting: 'App\\Domain\\Ads\\Entities\\Settings\\AdsSetting',
} as const;

export type AdsSetting = {
  googleAdsFeatureFlagSetting?: AdsGoogleCampaignBudgetFeatureFlagSetting;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdsSettingObjectType)[keyof typeof AdsSettingObjectType];
};
