import { ProductFeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/ProductFeatureFlagsBundle';

export const ProductFeatureFlagsBundlesObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_ProductFeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\ProductFeatureFlagsBundles',
};

export const ProductFeatureFlagsBundlesObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_ProductFeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\ProductFeatureFlagsBundles',
} as const;

export type ProductFeatureFlagsBundles = {
  elements?: ProductFeatureFlagsBundle[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductFeatureFlagsBundlesObjectType)[keyof typeof ProductFeatureFlagsBundlesObjectType];
};
