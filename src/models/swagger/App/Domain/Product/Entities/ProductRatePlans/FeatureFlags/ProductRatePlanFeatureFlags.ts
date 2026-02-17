import { ProductRatePlanFeatureFlag } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/FeatureFlags/ProductRatePlanFeatureFlag';

export const ProductRatePlanFeatureFlagsObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlags_ProductRatePlanFeatureFlags:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlags\\ProductRatePlanFeatureFlags',
};

export const ProductRatePlanFeatureFlagsObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_FeatureFlags_ProductRatePlanFeatureFlags:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\FeatureFlags\\ProductRatePlanFeatureFlags',
} as const;

export type ProductRatePlanFeatureFlags = {
  elements?: ProductRatePlanFeatureFlag[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeatureFlagsObjectType)[keyof typeof ProductRatePlanFeatureFlagsObjectType];
};
