export const LinkedinConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_LinkedinConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\LinkedinConnectionProfile',
};

export const LinkedinConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Linkedin_Locations_Connection_LinkedinConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Linkedin\\Locations\\Connection\\LinkedinConnectionProfile',
} as const;

export type LinkedinConnectionProfile = {
  /**
   * LinkedIn Account ID
   */
  accountProfileId?: string;
  /**
   * LinkedOn Organization ID
   */
  organizationId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LinkedinConnectionProfileObjectType)[keyof typeof LinkedinConnectionProfileObjectType];
};
