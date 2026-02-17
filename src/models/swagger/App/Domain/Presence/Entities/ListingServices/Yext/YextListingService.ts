export const YextListingServiceType = {
  YEXT: 'YEXT',
};

export const YextListingServiceTypeStrict = {
  YEXT: 'YEXT',
} as const;

export const YextListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Yext_YextListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\YextListingService',
};

export const YextListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Yext_YextListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Yext\\YextListingService',
} as const;

export type YextListingService = {
  /**
   * the tyoe of the listingService
   *  Allowed Values:
   * -   `YEXT`: Yext ListingService
   *
   */
  type?: (typeof YextListingServiceType)[keyof typeof YextListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managerd,
   * if false, the Service covers only it's own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof YextListingServiceObjectType)[keyof typeof YextListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
