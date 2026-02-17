export const InstagramPostErrorObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Posts_InstagramPostError:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Posts\\InstagramPostError',
};

export type InstagramPostError = {
  type?: string;
  message?: string;
  code?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramPostErrorObjectType)[keyof typeof InstagramPostErrorObjectType];
};
