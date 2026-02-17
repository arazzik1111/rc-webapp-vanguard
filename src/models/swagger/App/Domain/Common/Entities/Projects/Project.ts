import { AdAccount } from '@models/swagger/App/Domain/Ads/Entities/AdAccount';
import { Account } from '@models/swagger/App/Domain/Common/Entities/Accounts/Account';
import { Business } from '@models/swagger/App/Domain/Presence/Entities/Business';
import { ProductRatePlanFeatures } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Features/ProductRatePlanFeatures';
import { ProductRatePlans } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/ProductRatePlans';
import { AppliedFeatureFlags } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlags/AppliedFeatureFlags';
import { ProjectSettings } from '@models/swagger/App/Domain/Product/Entities/Projects/ProjectSettings';
import { Subscriptions } from '@models/swagger/App/Domain/Product/Entities/Subscriptions/Subscriptions';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ProjectStatus = {
  active: 'active',
  deleted: 'deleted',
  gdpr_deleted: 'gdpr_deleted',
  canceled: 'canceled',
  locked: 'locked',
  expired: 'expired',
};

export const ProjectStatusStrict = {
  active: 'active',
  deleted: 'deleted',
  gdpr_deleted: 'gdpr_deleted',
  canceled: 'canceled',
  locked: 'locked',
  expired: 'expired',
} as const;

export const ProjectObjectType = {
  App_Domain_Common_Entities_Projects_Project: 'App\\Domain\\Common\\Entities\\Projects\\Project',
};

export const ProjectObjectTypeStrict = {
  App_Domain_Common_Entities_Projects_Project: 'App\\Domain\\Common\\Entities\\Projects\\Project',
} as const;

export type Project = {
  business?: Business;
  account?: Account;
  /**
   * Project's parent accountId
   */
  accountId?: number;
  adAccount?: AdAccount;
  /**
   * Project's status
   *  Allowed Values:
   * -   `active`: Active Project
   * -   `deleted`: Project was marked as deleted
   * -   `gdpr_deleted`: Project was marked as deleted due to a GDPR deletion request
   * -   `canceled`: Subscription backing this project was canceled
   * -   `locked`: Project is locked to subscription being locked
   * -   `expired`: Project has expired and should be deleted finally
   *
   */
  status?: (typeof ProjectStatus)[keyof typeof ProjectStatus];
  features?: ProductRatePlanFeatures;
  subscriptions?: Subscriptions;
  productRatePlans?: ProductRatePlans;
  settings?: ProjectSettings;
  featureFlags?: AppliedFeatureFlags;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectObjectType)[keyof typeof ProjectObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
