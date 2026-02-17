export const LocationListingServiceLocationSupportedPropertiesToSyncObjectType = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServiceLocationSupportedPropertiesToSync:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServiceLocationSupportedPropertiesToSync',
};

export const LocationListingServiceLocationSupportedPropertiesToSyncObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_ListingServices_Connection_LocationListingServiceLocationSupportedPropertiesToSync:
    'App\\Domain\\Presence\\Entities\\Locations\\ListingServices\\Connection\\LocationListingServiceLocationSupportedPropertiesToSync',
} as const;

export type LocationListingServiceLocationSupportedPropertiesToSync = {
  /**
   * Wheather ListingServiceLocation supports update of address or not
   */
  postalAddress?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of contact infos (phone numbers) or not
   */
  contactInfos?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of opening hours or not
   */
  openingHours?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of website or not
   */
  website?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of company / business name or not
   */
  company?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of categories or not
   */
  categories?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of descriptions or not
   */
  description?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of media items or not
   */
  mediaItems?: boolean;
  /**
   * Wheather ListingServiceLocation supports update of ServiceAreas or not
   */
  serviceAreas?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationListingServiceLocationSupportedPropertiesToSyncObjectType)[keyof typeof LocationListingServiceLocationSupportedPropertiesToSyncObjectType];
};
