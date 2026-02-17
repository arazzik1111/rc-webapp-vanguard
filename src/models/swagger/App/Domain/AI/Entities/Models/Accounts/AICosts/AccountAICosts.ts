import { AccountAICost } from '@models/swagger/App/Domain/AI/Entities/Models/Accounts/AICosts/AccountAICost';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const AccountAICostsObjectType = {
  App_Domain_AI_Entities_Models_Accounts_AICosts_AccountAICosts:
    'App\\Domain\\AI\\Entities\\Models\\Accounts\\AICosts\\AccountAICosts',
};

export const AccountAICostsObjectTypeStrict = {
  App_Domain_AI_Entities_Models_Accounts_AICosts_AccountAICosts:
    'App\\Domain\\AI\\Entities\\Models\\Accounts\\AICosts\\AccountAICosts',
} as const;

export type AccountAICosts = {
  elements?: AccountAICost[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AccountAICostsObjectType)[keyof typeof AccountAICostsObjectType];
  changeHistory?: ChangeHistory;
};
