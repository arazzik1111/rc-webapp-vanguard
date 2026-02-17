export const VerificationEmailDataObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_Options_VerificationEmailData:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\Options\\VerificationEmailData',
};

export const VerificationEmailDataObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_Options_VerificationEmailData:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\Options\\VerificationEmailData',
} as const;

export type VerificationEmailData = {
  /**
   * Domain name in the email address. e.g. "gmail.com" in foo@gmail.com
   */
  domain?: string;
  /**
   * User name in the email address. e.g. "foo" in foo@gmail.com
   */
  user?: string;
  /**
   * Whether client is allowed to provide a different user name
   */
  isUserNameEditable?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationEmailDataObjectType)[keyof typeof VerificationEmailDataObjectType];
};
