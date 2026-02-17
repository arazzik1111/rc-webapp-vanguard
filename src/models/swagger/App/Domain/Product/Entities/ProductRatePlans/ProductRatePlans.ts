import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';

export const ProductRatePlansObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlans:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlans',
};

export const ProductRatePlansObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_ProductRatePlans:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\ProductRatePlans',
} as const;

export type ProductRatePlans = {
  elements?: ProductRatePlan[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlansObjectType)[keyof typeof ProductRatePlansObjectType];
};
