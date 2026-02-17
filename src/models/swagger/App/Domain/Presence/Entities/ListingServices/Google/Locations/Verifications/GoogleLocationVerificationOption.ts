import { PhoneNumber } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/PhoneNumber';
import { VerificationAddresslData } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/Options/VerificationAddresslData';
import { VerificationEmailData } from '@models/swagger/App/Domain/Presence/Entities/ListingServices/Google/Locations/Verifications/Options/VerificationEmailData';

export const GoogleLocationVerificationOptionMethod = {
  VERIFICATION_METHOD_UNSPECIFIED: 'VERIFICATION_METHOD_UNSPECIFIED',
  ADDRESS: 'ADDRESS',
  EMAIL: 'EMAIL',
  PHONE_CALL: 'PHONE_CALL',
  SMS: 'SMS',
  AUTO: 'AUTO',
  VETTED_PARTNER: 'VETTED_PARTNER',
};

export const GoogleLocationVerificationOptionMethodStrict = {
  VERIFICATION_METHOD_UNSPECIFIED: 'VERIFICATION_METHOD_UNSPECIFIED',
  ADDRESS: 'ADDRESS',
  EMAIL: 'EMAIL',
  PHONE_CALL: 'PHONE_CALL',
  SMS: 'SMS',
  AUTO: 'AUTO',
  VETTED_PARTNER: 'VETTED_PARTNER',
} as const;

export const GoogleLocationVerificationOptionObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerificationOption:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerificationOption',
};

export const GoogleLocationVerificationOptionObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerificationOption:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerificationOption',
} as const;

export type GoogleLocationVerificationOption = {
  /**
   * Selected verification method
   *  Allowed Values:
   * -   `VERIFICATION_METHOD_UNSPECIFIED`
   * -   `ADDRESS`
   * -   `EMAIL`
   * -   `PHONE_CALL`
   * -   `SMS`
   * -   `AUTO`
   * -   `VETTED_PARTNER`
   *
   */
  method?: (typeof GoogleLocationVerificationOptionMethod)[keyof typeof GoogleLocationVerificationOptionMethod];
  phoneNumber?: PhoneNumber;
  emailData?: VerificationEmailData;
  addresslData?: VerificationAddresslData;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationVerificationOptionObjectType)[keyof typeof GoogleLocationVerificationOptionObjectType];
};
