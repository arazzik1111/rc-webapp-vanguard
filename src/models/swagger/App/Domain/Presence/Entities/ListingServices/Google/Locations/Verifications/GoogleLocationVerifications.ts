import { GoogleLocationVerification } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/GoogleLocationVerification';
import { GoogleLocationVerificationOptions } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/GoogleLocationVerificationOptions';

export const GoogleLocationVerificationsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerifications:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerifications',
};

export const GoogleLocationVerificationsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerifications:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerifications',
} as const;

export type GoogleLocationVerifications = {
  verificationOptions?: GoogleLocationVerificationOptions;
  elements?: GoogleLocationVerification[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationVerificationsObjectType)[keyof typeof GoogleLocationVerificationsObjectType];
};
