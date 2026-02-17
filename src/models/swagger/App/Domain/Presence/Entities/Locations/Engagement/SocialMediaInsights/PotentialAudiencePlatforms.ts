export const PotentialAudiencePlatformsObjectType = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_PotentialAudiencePlatforms:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\PotentialAudiencePlatforms',
};

export const PotentialAudiencePlatformsObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Engagement_SocialMediaInsights_PotentialAudiencePlatforms:
    'App\\Domain\\Presence\\Entities\\Locations\\Engagement\\SocialMediaInsights\\PotentialAudiencePlatforms',
} as const;

export type PotentialAudiencePlatforms = {
  /**
   * platforms
   *  Allowed Values:
   * -   `facebook`
   * -   `instagram`
   *
   */
  platforms?: string[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PotentialAudiencePlatformsObjectType)[keyof typeof PotentialAudiencePlatformsObjectType];
};
