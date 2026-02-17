export const FacebookConnectionProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_FacebookConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\FacebookConnectionProfile',
};

export const FacebookConnectionProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Facebook_Locations_Connection_FacebookConnectionProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Facebook\\Locations\\Connection\\FacebookConnectionProfile',
} as const;

export type FacebookConnectionProfile = {
  /**
   * Facebook Account ID
   */
  facebookAccountProfileId?: string;
  /**
   * Facebook Page ID
   */
  facebookPageId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FacebookConnectionProfileObjectType)[keyof typeof FacebookConnectionProfileObjectType];
};
