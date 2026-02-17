export const InstagramLocationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_InstagramLocation:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\InstagramLocation',
};

export type InstagramLocation = {
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
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramLocationObjectType)[keyof typeof InstagramLocationObjectType];
};
