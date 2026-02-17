import { AccountAICost } from '@models/swagger/App/Domain/Product/Entities/Accounts/AICosts/AccountAICost';

export const AccountAICostsObjectType = {
  App_Domain_Product_Entities_Accounts_AICosts_AccountAICosts:
    'App\\Domain\\Product\\Entities\\Accounts\\AICosts\\AccountAICosts',
};

export type AccountAICosts = {
  elements?: AccountAICost[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountAICostsObjectType)[keyof typeof AccountAICostsObjectType];
};
