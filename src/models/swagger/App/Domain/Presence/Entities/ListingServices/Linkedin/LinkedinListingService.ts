export const LinkedinListingServiceType = {
  LINKEDIN: 'LINKEDIN',
};

export const LinkedinListingServiceTypeStrict = {
  LINKEDIN: 'LINKEDIN',
} as const;

export const LinkedinListingServiceObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_LinkedinListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\LinkedinListingService',
};

export const LinkedinListingServiceObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_LinkedinListingService:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\LinkedinListingService',
} as const;

export type LinkedinListingService = {
  /**
   * the type of the listingService
   *  Allowed Values:
   * -   `LINKEDIN`: LinkedIn ListingService
   *
   */
  type?: (typeof LinkedinListingServiceType)[keyof typeof LinkedinListingServiceType];
  /**
   * If true, the ListingService supports multiple business directories to be managed,
   * if false, the Service covers only its own directory, e.g. GMB
   */
  isFullListingService?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinListingServiceObjectType)[keyof typeof LinkedinListingServiceObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
