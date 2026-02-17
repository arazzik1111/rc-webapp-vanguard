export const ReputationWidgetSettingsSize = {
  FULL: 'FULL',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
};

export const ReputationWidgetSettingsSizeStrict = {
  FULL: 'FULL',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
} as const;

export const ReputationWidgetSettingsCornerRoundness = {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

export const ReputationWidgetSettingsCornerRoundnessStrict = {
  NONE: 'NONE',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const;

export const ReputationWidgetSettingsObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetSettings:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetSettings',
};

export const ReputationWidgetSettingsObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReputationWidgetSettings:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReputationWidgetSettings',
} as const;

export type ReputationWidgetSettings = {
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
   */
  reviewFormPlatform?: string;
  /**
   * Reviews Widget size
   *  Allowed Values:
   * -   `FULL`: Widget size Full
   * -   `LARGE`: Widget Corner Roundness Large
   * -   `SMALL`: Widget Corner Roundness Small
   *
   */
  size?: (typeof ReputationWidgetSettingsSize)[keyof typeof ReputationWidgetSettingsSize];
  /**
   * Corner Roundness of review boxes
   *  Allowed Values:
   * -   `NONE`: Widget Corner Roundness None
   * -   `SMALL`: Widget Corner Roundness Small
   * -   `MEDIUM`: Widget Corner Roundness Medium
   * -   `LARGE`: Widget Corner Roundness Large
   *
   */
  cornerRoundness?: (typeof ReputationWidgetSettingsCornerRoundness)[keyof typeof ReputationWidgetSettingsCornerRoundness];
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
  objectType: (typeof ReputationWidgetSettingsObjectType)[keyof typeof ReputationWidgetSettingsObjectType];
};
