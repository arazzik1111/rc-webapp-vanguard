import { GoogleLocationVerificationOption } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/GoogleLocationVerificationOption';

export const GoogleLocationVerificationOptionsObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerificationOptions:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerificationOptions',
};

export const GoogleLocationVerificationOptionsObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerificationOptions:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerificationOptions',
} as const;

export type GoogleLocationVerificationOptions = {
  elements?: GoogleLocationVerificationOption[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationVerificationOptionsObjectType)[keyof typeof GoogleLocationVerificationOptionsObjectType];
};
