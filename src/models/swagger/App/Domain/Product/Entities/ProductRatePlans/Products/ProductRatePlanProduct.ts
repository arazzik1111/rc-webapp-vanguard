import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';
import { Product } from '@models/swagger/App/Domain/Product/Entities/Products/Product';

export const ProductRatePlanProductObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Products_ProductRatePlanProduct:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Products\\ProductRatePlanProduct',
};

export const ProductRatePlanProductObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Products_ProductRatePlanProduct:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Products\\ProductRatePlanProduct',
} as const;

export type ProductRatePlanProduct = {
  /**
   * The id of the associated ProductRatePlan
   */
  productRatePlanId?: number;
  productRatePlan?: ProductRatePlan;
  /**
   * The id of the associated Product
   */
  productId?: number;
  product?: Product;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanProductObjectType)[keyof typeof ProductRatePlanProductObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
