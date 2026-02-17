import { FeatureFlag } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/FeatureFlag';

export const FeatureFlagsObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlags_FeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\FeatureFlags',
};

export const FeatureFlagsObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlags_FeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlags\\FeatureFlags',
} as const;

export type FeatureFlags = {
  elements?: FeatureFlag[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureFlagsObjectType)[keyof typeof FeatureFlagsObjectType];
};
