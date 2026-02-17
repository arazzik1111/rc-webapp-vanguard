export const XListingServiceType = {
  X: 'X',
};

export const XListingServiceTypeStrict = {
  X: 'X',
} as const;

export const XListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_X_XListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\XListingService',
};

export const XListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_X_XListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\X\\XListingService',
} as const;

export type XListingService = {
  /**
   * the type of the listingService
   *  Allowed Values:
   * -   `X`: X ListingService
   *
   */
  type?: (typeof XListingServiceType)[keyof typeof XListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managed,
   * if false, the Service covers only its own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof XListingServiceObjectType)[keyof typeof XListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
