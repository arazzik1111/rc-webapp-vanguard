import { ProductRatePlanProduct } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Products/ProductRatePlanProduct';

export const ProductRatePlanProductsObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Products_ProductRatePlanProducts:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Products\\ProductRatePlanProducts',
};

export const ProductRatePlanProductsObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Products_ProductRatePlanProducts:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Products\\ProductRatePlanProducts',
} as const;

export type ProductRatePlanProducts = {
  elements?: ProductRatePlanProduct[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanProductsObjectType)[keyof typeof ProductRatePlanProductsObjectType];
};
