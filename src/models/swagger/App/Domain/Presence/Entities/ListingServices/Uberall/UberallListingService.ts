export const UberallListingServiceType = {
  UBERALL: 'UBERALL',
};

export const UberallListingServiceTypeStrict = {
  UBERALL: 'UBERALL',
} as const;

export const UberallListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_UberallListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\UberallListingService',
};

export const UberallListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_UberallListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\UberallListingService',
} as const;

export type UberallListingService = {
  /**
   * the tyoe of the listingService
   *  Allowed Values:
   * -   `UBERALL`: Uberall ListingService
   *
   */
  type?: (typeof UberallListingServiceType)[keyof typeof UberallListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managerd,
   * if false, the Service covers only it's own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallListingServiceObjectType)[keyof typeof UberallListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
