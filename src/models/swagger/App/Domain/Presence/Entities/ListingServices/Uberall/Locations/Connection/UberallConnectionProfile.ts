export const UberallConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Uberall_Locations_Connection_UberallConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\Locations\\Connection\\UberallConnectionProfile',
};

export const UberallConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Uberall_Locations_Connection_UberallConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Uberall\\Locations\\Connection\\UberallConnectionProfile',
} as const;

export type UberallConnectionProfile = {
  /**
   * The external Uberall Business ID
   */
  uberallBusinessId?: string;
  /**
   * The external Uberall Location ID
   */
  uberallLocationId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UberallConnectionProfileObjectType)[keyof typeof UberallConnectionProfileObjectType];
};
