export const ListingsSummaryObjectType = {
  App_Domain_Presence_Entities_Locations_Listings_ListingsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\ListingsSummary',
};

export const ListingsSummaryObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_Listings_ListingsSummary:
    'App\\Domain\\Presence\\Entities\\Locations\\Listings\\ListingsSummary',
} as const;

export type ListingsSummary = {
  /**
   * Number of directories the Locataion is correctly listed
   */
  listedCount?: number;
  /**
   * Number of directories the Locataion is not listed
   */
  notListedCount?: number;
  /**
   * Number of directories the Locataion is listed but data is either incomplete or inconsistent
   */
  inconsistentDataCount?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ListingsSummaryObjectType)[keyof typeof ListingsSummaryObjectType];
};
