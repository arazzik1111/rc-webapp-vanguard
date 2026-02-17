import { FeatureFlagsBundleFeatureFlags } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundleFeatureFlags';
import { ProductFeatureFlagsBundles } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/ProductFeatureFlagsBundles';

export const FeatureFlagsBundleObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundle',
};

export const FeatureFlagsBundleObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_FeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\FeatureFlagsBundle',
} as const;

export type FeatureFlagsBundle = {
  /**
   * The descriptive name of the FeatureFlagsBundle
   */
  name?: string;
  /**
   * A decsription for the preset / bundle with purpose and scope
   */
  description?: string;
  featureFlagsBundleFeatureFlags?: FeatureFlagsBundleFeatureFlags;
  productFeatureFlagsBundles?: ProductFeatureFlagsBundles;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureFlagsBundleObjectType)[keyof typeof FeatureFlagsBundleObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
