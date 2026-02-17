import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';
import { FeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundle';

export const ProductRatePlanFeatureFlagsBundleObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlagsBundles_ProductRatePlanFeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlagsBundles\\ProductRatePlanFeatureFlagsBundle',
};

export const ProductRatePlanFeatureFlagsBundleObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlagsBundles_ProductRatePlanFeatureFlagsBundle:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlagsBundles\\ProductRatePlanFeatureFlagsBundle',
} as const;

export type ProductRatePlanFeatureFlagsBundle = {
  /**
   * The id of the associated ProductRatePlan
   */
  productRatePlanId?: number;
  productRatePlan?: ProductRatePlan;
  /**
   * The id of the associated FeatureFlagsBundle
   */
  featureFlagsBundleId?: number;
  featureFlagsBundle?: FeatureFlagsBundle;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeatureFlagsBundleObjectType)[keyof typeof ProductRatePlanFeatureFlagsBundleObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
