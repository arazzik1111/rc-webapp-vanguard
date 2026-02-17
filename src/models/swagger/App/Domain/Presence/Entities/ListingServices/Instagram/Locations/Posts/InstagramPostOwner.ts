export const InstagramPostOwnerObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Posts_InstagramPostOwner:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Posts\\InstagramPostOwner',
};

export const InstagramPostOwnerObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_Locations_Posts_InstagramPostOwner:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\Locations\\Posts\\InstagramPostOwner',
} as const;

export type InstagramPostOwner = {
  /**
   * The owner's id
   */
  id?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramPostOwnerObjectType)[keyof typeof InstagramPostOwnerObjectType];
};
