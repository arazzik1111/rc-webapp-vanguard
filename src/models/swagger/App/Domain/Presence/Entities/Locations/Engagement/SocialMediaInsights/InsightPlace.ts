export const InsightPlaceObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightPlace:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightPlace',
};

export const InsightPlaceObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightPlace:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightPlace',
} as const;

export type InsightPlace = {
  /**
   * The integer value
   */
  value?: number;
  /**
   * The key of the key-value pair
   */
  key?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InsightPlaceObjectType)[keyof typeof InsightPlaceObjectType];
};
