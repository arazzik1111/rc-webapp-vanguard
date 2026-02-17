import { AppliedFeatureFlagUpgrade } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlagUpgrade';

export const AppliedFeatureFlagUpgradesObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlagUpgrades:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlagUpgrades',
};

export const AppliedFeatureFlagUpgradesObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlagUpgrades:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlagUpgrades',
} as const;

export type AppliedFeatureFlagUpgrades = {
  elements?: AppliedFeatureFlagUpgrade[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppliedFeatureFlagUpgradesObjectType)[keyof typeof AppliedFeatureFlagUpgradesObjectType];
};
