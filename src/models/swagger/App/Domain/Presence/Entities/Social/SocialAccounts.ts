export const SocialAccountsObjectType = {
  App_Domain_Presence_Entities_Social_SocialAccounts: 'App\\Domain\\Presence\\Entities\\Social\\SocialAccounts',
};

export const SocialAccountsObjectTypeStrict = {
  App_Domain_Presence_Entities_Social_SocialAccounts: 'App\\Domain\\Presence\\Entities\\Social\\SocialAccounts',
} as const;

export type SocialAccounts = {
  /**
   * The facebook page id
   */
  facebookPageId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SocialAccountsObjectType)[keyof typeof SocialAccountsObjectType];
};
