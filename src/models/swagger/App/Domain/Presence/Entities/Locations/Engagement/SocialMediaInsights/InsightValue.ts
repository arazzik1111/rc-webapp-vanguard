export const InsightValueObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightValue:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightValue',
};

export const InsightValueObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_InsightValue:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\InsightValue',
} as const;

export type InsightValue = {
  /**
   * Insight type name
   */
  name?: string;
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
  objectType: (typeof InsightValueObjectType)[keyof typeof InsightValueObjectType];
};
