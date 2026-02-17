export const SocialApiApplicationObjectType = {
  App_Domain_Presence_Entities_Social_SocialApiApplication:
    'App\\Domain\\Presence\\Entities\\Social\\SocialApiApplication',
};

export const SocialApiApplicationObjectTypeStrict = {
  App_Domain_Presence_Entities_Social_SocialApiApplication:
    'App\\Domain\\Presence\\Entities\\Social\\SocialApiApplication',
} as const;

export type SocialApiApplication = {
  /**
   * The uniq ID of the FB application
   */
  id?: string;
  /**
   * The username of the social FB developer API application
   */
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SocialApiApplicationObjectType)[keyof typeof SocialApiApplicationObjectType];
};
