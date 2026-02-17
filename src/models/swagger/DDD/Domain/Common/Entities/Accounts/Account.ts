import { Roles } from '@models/swagger/DDD/Domain/Common/Entities/Roles/Roles';

export const AccountObjectType = {
  DDD_Domain_Common_Entities_Accounts_Account: 'DDD\\Domain\\Common\\Entities\\Accounts\\Account',
};

export const AccountObjectTypeStrict = {
  DDD_Domain_Common_Entities_Accounts_Account: 'DDD\\Domain\\Common\\Entities\\Accounts\\Account',
} as const;

export type Account = {
  /**
   * Account's email
   */
  email?: string;
  roles?: Roles;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountObjectType)[keyof typeof AccountObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
