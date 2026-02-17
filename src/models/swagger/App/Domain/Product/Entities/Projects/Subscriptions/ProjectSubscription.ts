import { Project } from '@models/swagger/App/Domain/Common/Entities/Projects/Project';
import { Subscription } from '@models/swagger/App/Domain/Product/Entities/Subscriptions/Subscription';

export const ProjectSubscriptionObjectType = {
  App_Domain_Product_Entities_Projects_Subscriptions_ProjectSubscription:
    'App\\Domain\\Product\\Entities\\Projects\\Subscriptions\\ProjectSubscription',
};

export const ProjectSubscriptionObjectTypeStrict = {
  App_Domain_Product_Entities_Projects_Subscriptions_ProjectSubscription:
    'App\\Domain\\Product\\Entities\\Projects\\Subscriptions\\ProjectSubscription',
} as const;

export type ProjectSubscription = {
  /**
   * The id of the subscription
   */
  subscriptionId?: number;
  subscription?: Subscription;
  /**
   * The id of the project
   */
  projectId?: number;
  project?: Project;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProjectSubscriptionObjectType)[keyof typeof ProjectSubscriptionObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
