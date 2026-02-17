import { Feature } from '@models/swagger/App/Domain/Product/Entities/Features/Feature';
import { ProductRatePlanFeatureSettings } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Features/ProductRatePlanFeatureSettings';

export const ProductRatePlanFeatureObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeature:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeature',
};

export const ProductRatePlanFeatureObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Features_ProductRatePlanFeature:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Features\\ProductRatePlanFeature',
} as const;

export type ProductRatePlanFeature = {
  /**
   * The id of the feature
   */
  featureId?: number;
  /**
   * The id of the ProductRatepPlan
   */
  productRatePlanId?: number;
  feature?: Feature;
  settings?: ProductRatePlanFeatureSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanFeatureObjectType)[keyof typeof ProductRatePlanFeatureObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
