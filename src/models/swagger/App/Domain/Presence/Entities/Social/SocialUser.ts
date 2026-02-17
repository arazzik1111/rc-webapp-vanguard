export const SocialUserObjectType = {
  App_Domain_Presence_Entities_Social_SocialUser: 'App\\Domain\\Presence\\Entities\\Social\\SocialUser',
};

export const SocialUserObjectTypeStrict = {
  App_Domain_Presence_Entities_Social_SocialUser: 'App\\Domain\\Presence\\Entities\\Social\\SocialUser',
} as const;

export type SocialUser = {
  /**
   * The uniq ID of the FB/Instagram user
   */
  id?: string;
  /**
   * The username of the social media user account
   */
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SocialUserObjectType)[keyof typeof SocialUserObjectType];
};
