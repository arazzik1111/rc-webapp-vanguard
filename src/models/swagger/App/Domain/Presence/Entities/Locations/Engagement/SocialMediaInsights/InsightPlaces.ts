import { InsightPlace } from '@models/swagger/App/Domain/Presence/Entities/Locations/Engagement/SocialMediaInsights/InsightPlace';

export const InsightPlacesObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightPlaces:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightPlaces',
};

export const InsightPlacesObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightPlaces:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightPlaces',
} as const;

export type InsightPlaces = {
  /**
   * Insight type name
   */
  name?: string;
  elements?: InsightPlace[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InsightPlacesObjectType)[keyof typeof InsightPlacesObjectType];
};
