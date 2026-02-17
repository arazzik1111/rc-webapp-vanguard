import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';

export const AdsGoogleCampaignBudgetPerCountrySettingObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetPerCountrySetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetPerCountrySetting',
};

export const AdsGoogleCampaignBudgetPerCountrySettingObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetPerCountrySetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetPerCountrySetting',
} as const;

export type AdsGoogleCampaignBudgetPerCountrySetting = {
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
  objectType: (typeof AdsGoogleCampaignBudgetPerCountrySettingObjectType)[keyof typeof AdsGoogleCampaignBudgetPerCountrySettingObjectType];
};
