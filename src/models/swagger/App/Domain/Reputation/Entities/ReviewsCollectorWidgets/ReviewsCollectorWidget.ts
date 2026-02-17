import { Location } from '@models/swagger/App/Domain/Presence/Entities/Locations/Location';
import { ReviewsCollectorWidgetSettings } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsCollectorWidgets/ReviewsCollectorWidgetSettings';

export const ReviewsCollectorWidgetObjectType = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidget:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidget',
};

export const ReviewsCollectorWidgetObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidget:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidget',
} as const;

export type ReviewsCollectorWidget = {
  locationId?: number;
  /**
   * The widget code that will be included as a URL query parameter in the public widget endpoint
   */
  code?: string;
  settings?: ReviewsCollectorWidgetSettings;
  location?: Location;
  /**
   * The ReviewsCollectorWidget is active
   */
  active?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsCollectorWidgetObjectType)[keyof typeof ReviewsCollectorWidgetObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
