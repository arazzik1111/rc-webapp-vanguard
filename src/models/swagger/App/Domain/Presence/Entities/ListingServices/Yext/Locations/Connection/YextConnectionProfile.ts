export const YextConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Connection_YextConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Connection\\YextConnectionProfile',
};

export const YextConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_Locations_Connection_YextConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\Locations\\Connection\\YextConnectionProfile',
} as const;

export type YextConnectionProfile = {
  /**
   * The Yext Location ID
   */
  yextLocationId?: string;
  /**
   * The Yext Business ID
   */
  yextCompanyId?: string;
  /**
   * The Yext Subscription ID
   */
  yextSubscriptionId?: string;
  /**
   * The Yext Opening Hours ID
   */
  yextOpeningHoursId?: string;
  /**
   * The Yext Expiry Date
   */
  yextSubscriptionExpiry?: string;
  /**
   * The Yext URL ID
   */
  yextUrlId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextConnectionProfileObjectType)[keyof typeof YextConnectionProfileObjectType];
};
