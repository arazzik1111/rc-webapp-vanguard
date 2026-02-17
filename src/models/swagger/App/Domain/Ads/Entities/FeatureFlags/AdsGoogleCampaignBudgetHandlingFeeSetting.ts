export const AdsGoogleCampaignBudgetHandlingFeeSettingObjectType = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetHandlingFeeSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetHandlingFeeSetting',
};

export const AdsGoogleCampaignBudgetHandlingFeeSettingObjectTypeStrict = {
  App_Domain_Ads_Entities_FeatureFlags_AdsGoogleCampaignBudgetHandlingFeeSetting:
    'App\\Domain\\Ads\\Entities\\FeatureFlags\\AdsGoogleCampaignBudgetHandlingFeeSetting',
} as const;

export type AdsGoogleCampaignBudgetHandlingFeeSetting = {
  /**
   * If set, the ads handling fee is applied after this date
   */
  appliedAfter?: string;
  /**
   * Percentual handling fee taken by us
   */
  ownShare?: number;
  /**
   * Percentual handling fee taken by Reseller
   */
  resellerShare?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AdsGoogleCampaignBudgetHandlingFeeSettingObjectType)[keyof typeof AdsGoogleCampaignBudgetHandlingFeeSettingObjectType];
};
