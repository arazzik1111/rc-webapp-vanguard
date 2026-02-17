import { FeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundle';
import { Product } from '@models/swagger/App/Domain/Product/Entities/Products/Product';

export const ProductFeatureFlagsBundleObjectType = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_ProductFeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\ProductFeatureFlagsBundle',
};

export const ProductFeatureFlagsBundleObjectTypeStrict = {
  App_Domain_Product_Entities_Products_FeatureFlagsBundles_ProductFeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\Products\\FeatureFlagsBundles\\ProductFeatureFlagsBundle',
} as const;

export type ProductFeatureFlagsBundle = {
  /**
   * The id of the associated Product
   */
  productId?: number;
  product?: Product;
  /**
   * The id of the associated FeatureFlagsBundle
   */
  featureFlagsBundleId?: number;
  featureFlagsBundle?: FeatureFlagsBundle;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductFeatureFlagsBundleObjectType)[keyof typeof ProductFeatureFlagsBundleObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
