export const BoostAdSetDailyOutcomeObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetDailyOutcome:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetDailyOutcome',
};

export const BoostAdSetDailyOutcomeObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetDailyOutcome:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetDailyOutcome',
} as const;

export type BoostAdSetDailyOutcome = {
  /**
   * spend
   */
  spend?: number;
  /**
   * reach
   */
  reach?: number;
  /**
   * impressions
   */
  impressions?: number;
  /**
   * actions
   */
  actions?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetDailyOutcomeObjectType)[keyof typeof BoostAdSetDailyOutcomeObjectType];
};
