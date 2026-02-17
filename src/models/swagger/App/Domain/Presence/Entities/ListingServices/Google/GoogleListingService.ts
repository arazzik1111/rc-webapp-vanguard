export const GoogleListingServiceType = {
  GOOGLE: 'GOOGLE',
};

export const GoogleListingServiceTypeStrict = {
  GOOGLE: 'GOOGLE',
} as const;

export const GoogleListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_GoogleListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\GoogleListingService',
};

export const GoogleListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_GoogleListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\GoogleListingService',
} as const;

export type GoogleListingService = {
  /**
   * the tyoe of the listingService
   *  Allowed Values:
   * -   `GOOGLE`: Google ListingService (Google my Business / Google Business Profile)
   *
   */
  type?: (typeof GoogleListingServiceType)[keyof typeof GoogleListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managerd,
   * if false, the Service covers only it's own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleListingServiceObjectType)[keyof typeof GoogleListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
