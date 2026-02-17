import { Subscription } from '@models/swagger/App/Domain/Product/Entities/Subscriptions/Subscription';

export const SubscriptionsObjectType = {
  App_Domain_Product_Entities_Subscriptions_Subscriptions:
    'App\\Domain\\Product\\Entities\\Subscriptions\\Subscriptions',
};

export const SubscriptionsObjectTypeStrict = {
  App_Domain_Product_Entities_Subscriptions_Subscriptions:
    'App\\Domain\\Product\\Entities\\Subscriptions\\Subscriptions',
} as const;

export type Subscriptions = {
  elements?: Subscription[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SubscriptionsObjectType)[keyof typeof SubscriptionsObjectType];
};
