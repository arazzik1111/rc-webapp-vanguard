import { ReputationWidgetReviews } from '@models/swagger/App/Domain/Reputation/Entities/ReputationWidgets/ReputationWidgetReviews';
import { ReputationWidgetSettings } from '@models/swagger/App/Domain/Reputation/Entities/ReputationWidgets/ReputationWidgetSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ReputationWidgetObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidget:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidget',
};

export const ReputationWidgetObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidget:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidget',
} as const;

export type ReputationWidget = {
  /**
   * The project to which this widget belongs
   */
  locationId?: number;
  settings?: ReputationWidgetSettings;
  reviews?: ReputationWidgetReviews;
  /**
   * Reviews amount from selected directories
   */
  reviewsAmount?: number;
  /**
   * Average reviews rating from selected directories
   */
  averageRating?: number;
  /**
   * The widget code that will be included as a URL query parameter in the public widget endpoint
   */
  code?: string;
  /**
   * URL leading to a review form on the user's desired platform
   */
  reviewFormLink?: string;
  /**
   * Active state of Reviews Widget, public endpoint doesn't work while this is false
   */
  active?: boolean;
  /**
   * The reseller's name, our company is rankingCoach
   */
  resellerName?: string;
  /**
   * If the account owning this reviews widget has free subscriptions or not
   */
  isFreeAccount?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationWidgetObjectType)[keyof typeof ReputationWidgetObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
  changeHistory?: ChangeHistory;
};
