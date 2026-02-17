import { MetaBoostCampaignBudgetPerCountrySettings } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/MetaBoostCampaignBudgetPerCountrySettings';
import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';

export const MetaBoostCampaignBudgetFeatureFlagSettingObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetFeatureFlagSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetFeatureFlagSetting',
};

export const MetaBoostCampaignBudgetFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetFeatureFlagSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetFeatureFlagSetting',
} as const;

export type MetaBoostCampaignBudgetFeatureFlagSetting = {
  budgetMin?: MoneyAmount;
  budgetMax?: MoneyAmount;
  initialBudgetMin?: MoneyAmount;
  initialBudgetMax?: MoneyAmount;
  perCountrySettings?: MetaBoostCampaignBudgetPerCountrySettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaBoostCampaignBudgetFeatureFlagSettingObjectType)[keyof typeof MetaBoostCampaignBudgetFeatureFlagSettingObjectType];
};
