import { ApiAccount } from '@models/swagger/App/Domain/Partner/Entities/ApiAccounts/ApiAccount';
import { ResellerSettings } from '@models/swagger/App/Domain/Partner/Entities/Resellers/ResellerSettings';

export const ResellerObjectType = {
  App_Domain_Partner_Entities_Resellers_Reseller: 'App\\Domain\\Partner\\Entities\\Resellers\\Reseller',
};

export const ResellerObjectTypeStrict = {
  App_Domain_Partner_Entities_Resellers_Reseller: 'App\\Domain\\Partner\\Entities\\Resellers\\Reseller',
} as const;

export type Reseller = {
  /**
   * The name of the reseller
   */
  name?: string;
  /**
   * The alias for the reseller
   */
  alias?: string;
  apiAccount?: ApiAccount;
  /**
   * The id of the API user
   */
  apiAccountId?: number;
  /**
   * The id for the default subscription
   */
  defaultSubscriptionId?: number;
  /**
   * The default subscription
   */
  defaultSubscription?: string;
  settings?: ResellerSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ResellerObjectType)[keyof typeof ResellerObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
