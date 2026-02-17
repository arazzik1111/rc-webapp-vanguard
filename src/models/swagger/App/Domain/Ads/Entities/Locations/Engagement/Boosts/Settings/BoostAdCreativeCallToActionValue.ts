export const BoostAdCreativeCallToActionValueObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeCallToActionValue:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeCallToActionValue',
};

export const BoostAdCreativeCallToActionValueObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdCreativeCallToActionValue:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdCreativeCallToActionValue',
} as const;

export type BoostAdCreativeCallToActionValue = {
  /**
   * The app destination type
   */
  appDestination?: string;
  /**
   * Deep link to the app
   */
  appLink?: string;
  /**
   * Application related to the action
   */
  application?: string;
  /**
   * The destination link when the CTA button is clicked. This is required to be same as the link url of the creative.
   */
  link?: string;
  /**
   * Caption shown in the attachment. The caption must be an actual URL and should accurately reflect the URL and associated advertiser or business someone visits when they click on it.
   */
  linkCaption?: string;
  /**
   * ID of the Facebook page which the CTA button links to
   */
  page?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdCreativeCallToActionValueObjectType)[keyof typeof BoostAdCreativeCallToActionValueObjectType];
};
