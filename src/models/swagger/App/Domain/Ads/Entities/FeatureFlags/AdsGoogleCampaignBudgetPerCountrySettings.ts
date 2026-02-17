import { AdsGoogleCampaignBudgetPerCountrySetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/AdsGoogleCampaignBudgetPerCountrySetting';

export const AdsGoogleCampaignBudgetPerCountrySettingsObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetPerCountrySettings:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetPerCountrySettings',
};

export const AdsGoogleCampaignBudgetPerCountrySettingsObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetPerCountrySettings:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetPerCountrySettings',
} as const;

export type AdsGoogleCampaignBudgetPerCountrySettings = {
  elements?: AdsGoogleCampaignBudgetPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdsGoogleCampaignBudgetPerCountrySettingsObjectType)[keyof typeof AdsGoogleCampaignBudgetPerCountrySettingsObjectType];
};
