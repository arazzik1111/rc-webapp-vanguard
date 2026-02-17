import { PostalAddress } from '@models/swagger/App/Domain/Common/Entities/Address/PostalAddress';

export const VerificationAddresslDataObjectType = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_Options_VerificationAddresslData:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\Options\\VerificationAddresslData',
};

export const VerificationAddresslDataObjectTypeStrict = {
  App_Domain_Presence_Entities_ListingServices_Google_Locations_Verifications_Options_VerificationAddresslData:
    'App\\Domain\\Presence\\Entities\\ListingServices\\Google\\Locations\\Verifications\\Options\\VerificationAddresslData',
} as const;

export type VerificationAddresslData = {
  /**
   * Merchant's business name
   */
  business?: string;
  postalAddress?: PostalAddress;
  /**
   * Expected number of days it takes to deliver a postcard to the address's region
   */
  expectedDeliveryDaysRegion?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VerificationAddresslDataObjectType)[keyof typeof VerificationAddresslDataObjectType];
};
