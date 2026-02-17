import { ProductRatePlanUpgrade } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgrade';

export const ProductRatePlanUpgradesObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgrades:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgrades',
};

export const ProductRatePlanUpgradesObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgrades:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgrades',
} as const;

export type ProductRatePlanUpgrades = {
  elements?: ProductRatePlanUpgrade[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanUpgradesObjectType)[keyof typeof ProductRatePlanUpgradesObjectType];
};
