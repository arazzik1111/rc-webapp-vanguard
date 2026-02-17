import { MetaBoostCampaignBudgetPerCountrySetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/MetaBoostCampaignBudgetPerCountrySetting';

export const MetaBoostCampaignBudgetPerCountrySettingsObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetPerCountrySettings:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetPerCountrySettings',
};

export const MetaBoostCampaignBudgetPerCountrySettingsObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetPerCountrySettings:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetPerCountrySettings',
} as const;

export type MetaBoostCampaignBudgetPerCountrySettings = {
  elements?: MetaBoostCampaignBudgetPerCountrySetting[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaBoostCampaignBudgetPerCountrySettingsObjectType)[keyof typeof MetaBoostCampaignBudgetPerCountrySettingsObjectType];
};
