import { ProductRatePlanUpgradeMethod } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgradeMethod';
import { AppliedFeatureFlag } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlag';

export const AppliedFeatureFlagUpgradeObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlagUpgrade:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlagUpgrade',
};

export const AppliedFeatureFlagUpgradeObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlagUpgrade:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlagUpgrade',
} as const;

export type AppliedFeatureFlagUpgrade = {
  featureFlagWithUpgrade?: AppliedFeatureFlag;
  /**
   * ProductRatePlan id to upgrade
   */
  upgradeProductRatePlanId?: number;
  /**
   * The name of the upgrade ProductRatePlan
   */
  upgradeProductRatePlanName?: string;
  upgradeMethod?: ProductRatePlanUpgradeMethod;
  /**
   * ProductRatePlan priority level
   */
  upgradeProductRatePlanPriority?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppliedFeatureFlagUpgradeObjectType)[keyof typeof AppliedFeatureFlagUpgradeObjectType];
};
