import { ProductRatePlanFeature } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Features/ProductRatePlanFeature';

export const ProductRatePlanFeaturesObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeatures:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeatures',
};

export const ProductRatePlanFeaturesObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeatures:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeatures',
} as const;

export type ProductRatePlanFeatures = {
  elements?: ProductRatePlanFeature[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeaturesObjectType)[keyof typeof ProductRatePlanFeaturesObjectType];
};
