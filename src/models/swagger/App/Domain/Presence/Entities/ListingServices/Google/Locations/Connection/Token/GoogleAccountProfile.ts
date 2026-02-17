export const GoogleAccountProfileObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleAccountProfile',
};

export const GoogleAccountProfileObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Connection_Token_GoogleAccountProfile:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Connection\\Token\\GoogleAccountProfile',
} as const;

export type GoogleAccountProfile = {
  /**
   * ID of the Account
   */
  id?: string;
  /**
   * The Accounts's email
   */
  email?: string;
  /**
   * Whether the Account has verified his mail or not
   */
  emailVerified?: boolean;
  /**
   * The full name of the Account
   */
  fullName?: string;
  /**
   * The URL of the Account profile picture
   */
  profilePicture?: string;
  /**
   * The locale of the user in 2-letter language code
   */
  locale?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAccountProfileObjectType)[keyof typeof GoogleAccountProfileObjectType];
};
