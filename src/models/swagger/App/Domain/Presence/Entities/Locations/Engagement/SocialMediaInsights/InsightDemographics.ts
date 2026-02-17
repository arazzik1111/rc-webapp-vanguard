import { InsightDemographic } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightDemographic';

export const InsightDemographicsObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightDemographics:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightDemographics',
};

export const InsightDemographicsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightDemographics:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightDemographics',
} as const;

export type InsightDemographics = {
  /**
   * Insight type name
   */
  name?: string;
  elements?: InsightDemographic[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InsightDemographicsObjectType)[keyof typeof InsightDemographicsObjectType];
};
