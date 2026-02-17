export const InstagramAccountObjectType = {
  App_Domain_Ads_Entities_Facebook_InstagramAccount: 'App\\Domain\\Ads\\Entities\\Facebook\\InstagramAccount',
};

export const InstagramAccountObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_InstagramAccount: 'App\\Domain\\Ads\\Entities\\Facebook\\InstagramAccount',
} as const;

export type InstagramAccount = {
  /**
   * The id of the instagram account - from meta
   */
  id?: string;
  /**
   * User Name
   */
  userName?: string;
  /**
   * Profile picture
   */
  profilePicture?: string;
  /**
   * Is published
   */
  isPublished?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramAccountObjectType)[keyof typeof InstagramAccountObjectType];
};
