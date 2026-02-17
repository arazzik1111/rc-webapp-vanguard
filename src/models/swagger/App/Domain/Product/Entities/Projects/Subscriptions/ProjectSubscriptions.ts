import { ProjectSubscription } from '@models/swagger/App/Domain/Product/Entities/Projects/Subscriptions/ProjectSubscription';

export const ProjectSubscriptionsObjectType = {
  App_Domain_Product_Entities_Projects_Subscriptions_ProjectSubscriptions:
    'App\\Domain\\Product\\Entities\\Projects\\Subscriptions\\ProjectSubscriptions',
};

export const ProjectSubscriptionsObjectTypeStrict = {
  App_Domain_Product_Entities_Projects_Subscriptions_ProjectSubscriptions:
    'App\\Domain\\Product\\Entities\\Projects\\Subscriptions\\ProjectSubscriptions',
} as const;

export type ProjectSubscriptions = {
  elements?: ProjectSubscription[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectSubscriptionsObjectType)[keyof typeof ProjectSubscriptionsObjectType];
};
