import { RatePlan } from '@models/swagger/App/Domain/Product/Entities/RatePlans/RatePlan';

export const RatePlansObjectType = {
  App_Domain_Product_Entities_RatePlans_RatePlans: 'App\\Domain\\Product\\Entities\\RatePlans\\RatePlans',
};

export const RatePlansObjectTypeStrict = {
  App_Domain_Product_Entities_RatePlans_RatePlans: 'App\\Domain\\Product\\Entities\\RatePlans\\RatePlans',
} as const;

export type RatePlans = {
  elements?: RatePlan[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RatePlansObjectType)[keyof typeof RatePlansObjectType];
};
