export const GoogleLocationStateObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_LocationState_GoogleLocationState:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\LocationState\\GoogleLocationState',
};

export const GoogleLocationStateObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_LocationState_GoogleLocationState:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\LocationState\\GoogleLocationState',
} as const;

export type GoogleLocationState = {
  /**
   * The location's id
   */
  locationId?: string | number;
  /**
   * Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase.
   */
  hasVoiceOfMerchant?: boolean;
  /**
   * Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. hasVoiceOfMerchant is true).
   */
  hasBusinessAuthority?: boolean;
  /**
   * Indicates that the business location duplicates another business
   */
  hasOwnershipConflict?: boolean;
  /**
   * Indicates that the location requires (re)verification
   */
  requiresVerification?: boolean;
  /**
   * Indicates that the location is in pending review (after verification sometimes a manual review is performed)
   */
  hasPendingReview?: boolean;
  /**
   * Indicates that the location is disabled
   */
  isDisabled?: boolean;
  /**
   * Indicates that the location is suspended
   */
  isSuspended?: boolean;
  /**
   * Indicates that the location already appears as connected in Argus DB
   */
  isArgusDuplicateConnection?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationStateObjectType)[keyof typeof GoogleLocationStateObjectType];
};
