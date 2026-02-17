import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';
import { ProjectSubscriptions } from '@models/swagger/App/Domain/Product/Entities/Projects/Subscriptions/ProjectSubscriptions';
import { RatePlans } from '@models/swagger/App/Domain/Product/Entities/RatePlans/RatePlans';

export const SubscriptionStatus = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  LOCKED: 'LOCKED',
  PAUSED: 'PAUSED',
};

export const SubscriptionStatusStrict = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  LOCKED: 'LOCKED',
  PAUSED: 'PAUSED',
} as const;

export const SubscriptionObjectType = {
  App_Domain_Product_Entities_Subscriptions_Subscription: 'App\\Domain\\Product\\Entities\\Subscriptions\\Subscription',
};

export const SubscriptionObjectTypeStrict = {
  App_Domain_Product_Entities_Subscriptions_Subscription: 'App\\Domain\\Product\\Entities\\Subscriptions\\Subscription',
} as const;

export type Subscription = {
  /**
   * The id of the account
   */
  accountId?: number;
  /**
   * The status of the subscription
   *  Allowed Values:
   * -   `ACTIVE`: Active subscription
   * -   `CANCELLED`: Cancelled subscription
   * -   `LOCKED`: Subscription locked due to payment or fraud reasons
   * -   `PAUSED`: Paused subscription
   *
   */
  status?: (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
  /**
   * The date the subscription starts
   */
  startDate?: string;
  cancellationIncomingDate?: string;
  cancellationEffectiveDate?: string;
  ratePlans?: RatePlans;
  projects?: ProjectSubscriptions;
  /**
   * The id of the country, e.g. DE
   */
  countryId?: number;
  country?: Country;
  /**
   * The language code used, e.g. de
   */
  languageCode?: string;
  /**
   * External identifier for subscription passed e.g. by Reseller
   */
  externalId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SubscriptionObjectType)[keyof typeof SubscriptionObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
