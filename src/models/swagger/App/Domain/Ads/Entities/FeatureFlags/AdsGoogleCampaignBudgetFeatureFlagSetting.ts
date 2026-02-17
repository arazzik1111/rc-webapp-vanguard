import { AdsGoogleCampaignBudgetHandlingFeeSetting } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/AdsGoogleCampaignBudgetHandlingFeeSetting';
import { AdsGoogleCampaignBudgetPerCountrySettings } from '@models/swagger/App/Domain/Ads/Entities/FeatureFlags/AdsGoogleCampaignBudgetPerCountrySettings';
import { MoneyAmount } from '@models/swagger/App/Domain/Common/Entities/Money/MoneyAmount';

export const AdsGoogleCampaignBudgetFeatureFlagSettingVoucherDistributionMethod = {
  daily: 'daily',
  whole: 'whole',
};

export const AdsGoogleCampaignBudgetFeatureFlagSettingVoucherDistributionMethodStrict = {
  daily: 'daily',
  whole: 'whole',
} as const;

export const AdsGoogleCampaignBudgetFeatureFlagSettingObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetFeatureFlagSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetFeatureFlagSetting',
};

export const AdsGoogleCampaignBudgetFeatureFlagSettingObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetFeatureFlagSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetFeatureFlagSetting',
} as const;

export type AdsGoogleCampaignBudgetFeatureFlagSetting = {
  budgetMin?: MoneyAmount;
  budgetMax?: MoneyAmount;
  initialBudgetMin?: MoneyAmount;
  initialBudgetMax?: MoneyAmount;
  /**
   * If true, this featureFlag is only a preview setting and therefor shouldm not be considered an upgrade to FeatureFlagSettings that have ads feature enabled with lower budget
   */
  isPreviewFeatureFlagSetting?: boolean;
  /**
   * The duration in days where initial budget restrictions apply
   */
  durationOfInitialBudgetRestrictions?: number;
  handlingFee?: AdsGoogleCampaignBudgetHandlingFeeSetting;
  /**
   * The way ads vouchers are distributed
   *  Allowed Values:
   * -   `daily`: Voucher is distributed daily after receival until completely consumed
   * -   `whole`: Voucher recognized completely on the day it is received
   *
   */
  voucherDistributionMethod?: (typeof AdsGoogleCampaignBudgetFeatureFlagSettingVoucherDistributionMethod)[keyof typeof AdsGoogleCampaignBudgetFeatureFlagSettingVoucherDistributionMethod];
  /**
   * The date after the vaucher distribution method will be applied
   */
  voucherDistributionMethodStartDate?: string;
  perCountrySettings?: AdsGoogleCampaignBudgetPerCountrySettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdsGoogleCampaignBudgetFeatureFlagSettingObjectType)[keyof typeof AdsGoogleCampaignBudgetFeatureFlagSettingObjectType];
};
