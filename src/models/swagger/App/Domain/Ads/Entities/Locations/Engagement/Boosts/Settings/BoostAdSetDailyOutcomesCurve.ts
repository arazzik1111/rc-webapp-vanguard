import { BoostAdSetDailyOutcome } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/BoostAdSetDailyOutcome';

export const BoostAdSetDailyOutcomesCurveObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetDailyOutcomesCurve:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetDailyOutcomesCurve',
};

export const BoostAdSetDailyOutcomesCurveObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_BoostAdSetDailyOutcomesCurve:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\BoostAdSetDailyOutcomesCurve',
} as const;

export type BoostAdSetDailyOutcomesCurve = {
  elements?: BoostAdSetDailyOutcome[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BoostAdSetDailyOutcomesCurveObjectType)[keyof typeof BoostAdSetDailyOutcomesCurveObjectType];
};
