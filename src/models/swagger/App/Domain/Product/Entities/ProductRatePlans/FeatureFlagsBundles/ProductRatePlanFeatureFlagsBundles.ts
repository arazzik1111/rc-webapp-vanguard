import { ProductRatePlanFeatureFlagsBundle } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/FeatureFlagsBundles/ProductRatePlanFeatureFlagsBundle';

export const ProductRatePlanFeatureFlagsBundlesObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlagsBundles_ProductRatePlanFeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlagsBundles\\ProductRatePlanFeatureFlagsBundles',
};

export const ProductRatePlanFeatureFlagsBundlesObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlagsBundles_ProductRatePlanFeatureFlagsBundles:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlagsBundles\\ProductRatePlanFeatureFlagsBundles',
} as const;

export type ProductRatePlanFeatureFlagsBundles = {
  elements?: ProductRatePlanFeatureFlagsBundle[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeatureFlagsBundlesObjectType)[keyof typeof ProductRatePlanFeatureFlagsBundlesObjectType];
};
