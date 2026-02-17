import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { ApiAccountSettings } from '@models/swagger/App/Domain/Partner/Entities/ApiAccounts/ApiAccountSettings';
import { Reseller } from '@models/swagger/App/Domain/Partner/Entities/Resellers/Reseller';

export const ApiAccountObjectType = {
  App_Domain_Partner_Entities_ApiAccounts_ApiAccount: 'App\\Domain\\Partner\\Entities\\ApiAccounts\\ApiAccount',
};

export const ApiAccountObjectTypeStrict = {
  App_Domain_Partner_Entities_ApiAccounts_ApiAccount: 'App\\Domain\\Partner\\Entities\\ApiAccounts\\ApiAccount',
} as const;

export type ApiAccount = {
  /**
   * ApiAccount's Name
   */
  name?: string;
  /**
   * ApiAccount's Email
   */
  email?: string;
  /**
   * ApiAccount's Username
   */
  username?: string;
  /**
   * ApiAccount's resellerId
   */
  resellerId?: number;
  reseller?: Reseller;
  partnerAccount?: Account;
  settings?: ApiAccountSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ApiAccountObjectType)[keyof typeof ApiAccountObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
