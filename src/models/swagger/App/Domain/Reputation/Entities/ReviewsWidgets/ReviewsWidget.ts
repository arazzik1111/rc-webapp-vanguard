import { ReviewsWidgetReviews } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsWidgets/ReviewsWidgetReviews';
import { ReviewsWidgetSettings } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsWidgets/ReviewsWidgetSettings';
import { ChangeHistory } from '@models/swagger/DDD/Domain/Base/Entities/ChangeHistory/ChangeHistory';

export const ReviewsWidgetObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsWidget:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsWidget',
};

export type ReviewsWidget = {
  /**
   * The project to which this widget belongs
   */
  locationId?: number;
  settings?: ReviewsWidgetSettings;
  reviews?: ReviewsWidgetReviews;
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
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsWidgetObjectType)[keyof typeof ReviewsWidgetObjectType];
  changeHistory?: ChangeHistory;
};
