import { ProductRatePlan } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlan';
import { ProductRatePlanUpgradeMethod } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgradeMethod';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ProductRatePlanUpgradeObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgrade:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgrade',
};

export const ProductRatePlanUpgradeObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgrade:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgrade',
} as const;

export type ProductRatePlanUpgrade = {
  /**
   * The id of the ProductRatePlanUpgrade
   */
  id?: number;
  currentProductRatePlan?: ProductRatePlan;
  /**
   * The current ProductRatePlan's id for which the upgrade is available
   */
  currentProductRatePlanId?: number;
  upgradeProductRatePlan?: ProductRatePlan;
  /**
   * The ProductRatePlan's id that is offered in upgrade
   */
  upgradeProductRatePlanId?: number;
  upgradeMethod?: ProductRatePlanUpgradeMethod;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanUpgradeObjectType)[keyof typeof ProductRatePlanUpgradeObjectType];
  changeHistory?: ChangeHistory;
};
