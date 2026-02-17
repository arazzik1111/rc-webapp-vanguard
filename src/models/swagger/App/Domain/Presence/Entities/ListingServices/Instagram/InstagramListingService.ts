export const InstagramListingServiceType = {
  INSTAGRAM: 'INSTAGRAM',
};

export const InstagramListingServiceTypeStrict = {
  INSTAGRAM: 'INSTAGRAM',
} as const;

export const InstagramListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Instagram_InstagramListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\InstagramListingService',
};

export const InstagramListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Instagram_InstagramListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Instagram\\InstagramListingService',
} as const;

export type InstagramListingService = {
  /**
   * the type of the listingService
   *  Allowed Values:
   * -   `INSTAGRAM`: Instagram ListingService
   *
   */
  type?: (typeof InstagramListingServiceType)[keyof typeof InstagramListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managed,
   * if false, the Service covers only its own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramListingServiceObjectType)[keyof typeof InstagramListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
