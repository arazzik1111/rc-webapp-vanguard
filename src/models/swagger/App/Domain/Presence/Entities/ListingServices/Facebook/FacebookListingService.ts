export const FacebookListingServiceType = {
  FACEBOOK: 'FACEBOOK',
};

export const FacebookListingServiceTypeStrict = {
  FACEBOOK: 'FACEBOOK',
} as const;

export const FacebookListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_FacebookListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\FacebookListingService',
};

export const FacebookListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_FacebookListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\FacebookListingService',
} as const;

export type FacebookListingService = {
  /**
   * the type of the listingService
   *  Allowed Values:
   * -   `FACEBOOK`: Facebook business page
   *
   */
  type?: (typeof FacebookListingServiceType)[keyof typeof FacebookListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managed,
   * if false, the Service covers only its own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookListingServiceObjectType)[keyof typeof FacebookListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
