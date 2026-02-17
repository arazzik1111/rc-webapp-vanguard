export const InstagramConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Connection_InstagramConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Connection\\InstagramConnectionProfile',
};

export const InstagramConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Connection_InstagramConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Connection\\InstagramConnectionProfile',
} as const;

export type InstagramConnectionProfile = {
  /**
   * The Instagram Page ID
   */
  externalId?: string;
  /**
   * The Website URL
   */
  websiteUrl?: string;
  /**
   * The unique name of the Instagram Account
   */
  userName?: string;
  /**
   * The Instagram Page Url
   */
  pageUrl?: string;
  /**
   * The name of the Instagram Page
   */
  name?: string;
  /**
   * The profile picture URL of the Instagram Page
   */
  profilePictureUrl?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramConnectionProfileObjectType)[keyof typeof InstagramConnectionProfileObjectType];
};
