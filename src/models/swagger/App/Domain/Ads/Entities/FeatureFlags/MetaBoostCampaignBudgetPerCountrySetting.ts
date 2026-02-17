import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';

export const MetaBoostCampaignBudgetPerCountrySettingObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetPerCountrySetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetPerCountrySetting',
};

export const MetaBoostCampaignBudgetPerCountrySettingObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_MetaBoostCampaignBudgetPerCountrySetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\MetaBoostCampaignBudgetPerCountrySetting',
} as const;

export type MetaBoostCampaignBudgetPerCountrySetting = {
  budgetMin?: MoneyAmount;
  budgetMax?: MoneyAmount;
  initialBudgetMin?: MoneyAmount;
  initialBudgetMax?: MoneyAmount;
  /**
   * The short code for the country, e.g. DE
   */
  countryShortCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaBoostCampaignBudgetPerCountrySettingObjectType)[keyof typeof MetaBoostCampaignBudgetPerCountrySettingObjectType];
};
