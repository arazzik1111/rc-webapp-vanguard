import { FeatureFlagsBundleFeatureFlag } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundleFeatureFlag';

export const FeatureFlagsBundleFeatureFlagsObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundleFeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundleFeatureFlags',
};

export const FeatureFlagsBundleFeatureFlagsObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundleFeatureFlags:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundleFeatureFlags',
} as const;

export type FeatureFlagsBundleFeatureFlags = {
  elements?: FeatureFlagsBundleFeatureFlag[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureFlagsBundleFeatureFlagsObjectType)[keyof typeof FeatureFlagsBundleFeatureFlagsObjectType];
};
