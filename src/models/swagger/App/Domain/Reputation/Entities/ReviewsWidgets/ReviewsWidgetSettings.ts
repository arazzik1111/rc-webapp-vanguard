export const ReviewsWidgetSettingsSize = {
  FULL: 'FULL',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
};

export const ReviewsWidgetSettingsCornerRoundness = {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

export const ReviewsWidgetSettingsReviewFormPlatform = {
  facebook: 'facebook',
  googleBusinessProfile: 'google-business-profile',
};

export const ReviewsWidgetSettingsObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsWidgetSettings:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsWidgetSettings',
};

export type ReviewsWidgetSettings = {
  /**
   * Reviews Widget size
   *  Allowed Values:
   * -   `FULL`
   * -   `LARGE`
   * -   `SMALL`
   *
   */
  size?: (typeof ReviewsWidgetSettingsSize)[keyof typeof ReviewsWidgetSettingsSize];
  /**
   * Corner Roundness of review boxes
   *  Allowed Values:
   * -   `NONE`
   * -   `SMALL`
   * -   `MEDIUM`
   * -   `LARGE`
   *
   */
  cornerRoundness?: (typeof ReviewsWidgetSettingsCornerRoundness)[keyof typeof ReviewsWidgetSettingsCornerRoundness];
  /**
   * Source of reviews
   */
  source?: string[];
  /**
   * Minimum rating of reviews shown, Facebook reviews only have values 5 and 1 (Recommend and Don't Recommend)
   */
  ratings?: number[];
  /**
   * Review form to link to based on platform
   *  Allowed Values:
   * -   `facebook`
   * -   `google-business-profile`
   *
   */
  reviewFormPlatform?: (typeof ReviewsWidgetSettingsReviewFormPlatform)[keyof typeof ReviewsWidgetSettingsReviewFormPlatform];
  /**
   * Language to display interface text in
   */
  languageCode?: string;
  /**
   * Reviews Widget background opacity
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
  reviewsWidgetTextColor?: string;
  /**
   * Reviews Widget background color
   */
  reviewsWidgetBackgroundColor?: string;
  /**
   * 'Leave a review' button text, which can be different from 'Leave a review'
   */
  buttonText?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsWidgetSettingsObjectType)[keyof typeof ReviewsWidgetSettingsObjectType];
};
