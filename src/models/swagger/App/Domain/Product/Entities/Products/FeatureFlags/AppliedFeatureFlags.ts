import { AppliedFeatureFlag } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlag';

export const AppliedFeatureFlagsObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlags',
};

export const AppliedFeatureFlagsObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlags_AppliedFeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\AppliedFeatureFlags',
} as const;

export type AppliedFeatureFlags = {
  elements?: AppliedFeatureFlag[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AppliedFeatureFlagsObjectType)[keyof typeof AppliedFeatureFlagsObjectType];
};
