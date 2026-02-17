import { ReviewsCollectorWidgetReviewSources } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsCollectorWidgets/ReviewsCollectorWidgetReviewSources';

export const ReviewsCollectorWidgetSettingsSize = {
  FULL: 'FULL',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
};

export const ReviewsCollectorWidgetSettingsSizeStrict = {
  FULL: 'FULL',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
} as const;

export const ReviewsCollectorWidgetSettingsCornerRoundness = {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

export const ReviewsCollectorWidgetSettingsCornerRoundnessStrict = {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const;

export const ReviewsCollectorWidgetSettingsObjectType = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetSettings:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetSettings',
};

export const ReviewsCollectorWidgetSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReviewsCollectorWidgets_ReviewsCollectorWidgetSettings:
    'App\\Domain\\Reputation\\Entities\\ReviewsCollectorWidgets\\ReviewsCollectorWidgetSettings',
} as const;

export type ReviewsCollectorWidgetSettings = {
  reviewFormPlatform?: ReviewsCollectorWidgetReviewSources;
  /**
   * The review sources
   */
  sources?: string[];
  /**
   * The positive review message
   */
  positiveReviewMessage?: string;
  /**
   * The negative review message
   */
  negativeReviewMessage?: string;
  /**
   * Reviews Widget size
   *  Allowed Values:
   * -   `FULL`: Widget size Full
   * -   `LARGE`: Widget Corner Roundness Large
   * -   `SMALL`: Widget Corner Roundness Small
   *
   */
  size?: (typeof ReviewsCollectorWidgetSettingsSize)[keyof typeof ReviewsCollectorWidgetSettingsSize];
  /**
   * Corner Roundness of review boxes
   *  Allowed Values:
   * -   `NONE`: Widget Corner Roundness None
   * -   `SMALL`: Widget Corner Roundness Small
   * -   `MEDIUM`: Widget Corner Roundness Medium
   * -   `LARGE`: Widget Corner Roundness Large
   *
   */
  cornerRoundness?: (typeof ReviewsCollectorWidgetSettingsCornerRoundness)[keyof typeof ReviewsCollectorWidgetSettingsCornerRoundness];
  /**
   * Widget background opacity
   */
  backgroundOpacity?: number;
  /**
   * 'Leave a review' button background color
   */
  buttonBackgroundColor?: string;
  /**
   * 'Leave a review' button background color on hover
   */
  buttonBackgroundHoverColor?: string;
  /**
   * 'Leave a review' button text color
   */
  buttonTextColor?: string;
  /**
   * 'Leave a review' button text color on hover
   */
  buttonTextHoverColor?: string;
  /**
   * Reviews Widget text color
   */
  widgetTextColor?: string;
  /**
   * Reviews Widget background color
   */
  widgetBackgroundColor?: string;
  /**
   * 'Leave a review' button text, which can be different from 'Leave a review'
   */
  buttonText?: string;
  /**
   * Language to display interface text in
   */
  languageCode?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsCollectorWidgetSettingsObjectType)[keyof typeof ReviewsCollectorWidgetSettingsObjectType];
};
