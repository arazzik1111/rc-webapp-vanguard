import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';

export const RatePlanObjectType = {
  App_Domain_Product_Entities_RatePlans_RatePlan: 'App\\Domain\\Product\\Entities\\RatePlans\\RatePlan',
};

export const RatePlanObjectTypeStrict = {
  App_Domain_Product_Entities_RatePlans_RatePlan: 'App\\Domain\\Product\\Entities\\RatePlans\\RatePlan',
} as const;

export type RatePlan = {
  /**
   * The id of the subscription
   */
  subscriptionId?: number;
  /**
   * The id of the product rate plan
   */
  productRatePlanId?: number;
  productRatePlan?: ProductRatePlan;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RatePlanObjectType)[keyof typeof RatePlanObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
