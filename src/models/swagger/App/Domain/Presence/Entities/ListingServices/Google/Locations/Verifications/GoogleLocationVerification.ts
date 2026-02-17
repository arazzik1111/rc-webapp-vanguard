import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';
import { Email } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/Email';
import { PhoneNumber } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/PhoneNumber';
import { Exception } from '@models/swagger/DDD/Infrastructure/Exceptions/Exception';

export const GoogleLocationVerificationMethod = {
  VERIFICATION_METHOD_UNSPECIFIED: 'VERIFICATION_METHOD_UNSPECIFIED',
  ADDRESS: 'ADDRESS',
  EMAIL: 'EMAIL',
  PHONE_CALL: 'PHONE_CALL',
  SMS: 'SMS',
  AUTO: 'AUTO',
  VETTED_PARTNER: 'VETTED_PARTNER',
};

export const GoogleLocationVerificationMethodStrict = {
  VERIFICATION_METHOD_UNSPECIFIED: 'VERIFICATION_METHOD_UNSPECIFIED',
  ADDRESS: 'ADDRESS',
  EMAIL: 'EMAIL',
  PHONE_CALL: 'PHONE_CALL',
  SMS: 'SMS',
  AUTO: 'AUTO',
  VETTED_PARTNER: 'VETTED_PARTNER',
} as const;

export const GoogleLocationVerificationObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerification:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerification',
};

export const GoogleLocationVerificationObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_GoogleLocationVerification:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\GoogleLocationVerification',
} as const;

export type GoogleLocationVerification = {
  /**
   * Id of the verification process
   */
  id?: string;
  /**
   * Selected verification method
   *  Allowed Values:
   * -   `VERIFICATION_METHOD_UNSPECIFIED`: Default value, will result in errors
   * -   `ADDRESS`: Send a postcard with a verification PIN to a specific mailing address. The PIN is used to complete verification with Google
   * -   `EMAIL`: Send an email with a verification PIN to a specific email address. The PIN is used to complete verification with Google
   * -   `PHONE_CALL`: Make a phone call with a verification PIN to a specific phone number. The PIN is used to complete verification with Google
   * -   `SMS`: Send an SMS with a verification PIN to a specific phone number. The PIN is used to complete verification with Google
   * -   `AUTO`: Verify the location without additional user action. This option may not be available for all locations
   * -   `VETTED_PARTNER`: Used for vetted partners. This option may not be available for all locations
   *
   */
  method?: (typeof GoogleLocationVerificationMethod)[keyof typeof GoogleLocationVerificationMethod];
  /**
   * The state of the verification
   */
  state?: string;
  /**
   * The time when the verification was started
   */
  createdTime?: string;
  /**
   * The payload of the Verification, used only on creation of new Verification
   */
  payload?: Email | PhoneNumber | PostalAddress;
  /**
   * Pincode received to complete verification process
   */
  pinCode?: string;
  exception?: Exception;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleLocationVerificationObjectType)[keyof typeof GoogleLocationVerificationObjectType];
};
