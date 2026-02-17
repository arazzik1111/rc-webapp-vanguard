import { InsightGenderStatistic } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightGenderStatistic';

export const InsightDemographicObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightDemographic:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightDemographic',
};

export const InsightDemographicObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightDemographic:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightDemographic',
} as const;

export type InsightDemographic = {
  /**
   * Insight age group being counted
   */
  ageGroup?: string;
  /**
   * Insight type name
   */
  name?: string;
  elements?: InsightGenderStatistic[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InsightDemographicObjectType)[keyof typeof InsightDemographicObjectType];
};
