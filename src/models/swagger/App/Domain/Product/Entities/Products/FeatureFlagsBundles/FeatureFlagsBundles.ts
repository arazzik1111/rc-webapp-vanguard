import { FeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundle';

export const FeatureFlagsBundlesObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundles',
};

export const FeatureFlagsBundlesObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundles',
} as const;

export type FeatureFlagsBundles = {
  elements?: FeatureFlagsBundle[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureFlagsBundlesObjectType)[keyof typeof FeatureFlagsBundlesObjectType];
};
