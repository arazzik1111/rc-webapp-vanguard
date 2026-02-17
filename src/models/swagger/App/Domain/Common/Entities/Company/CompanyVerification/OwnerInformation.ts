import { OwnerVerificationDocument } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/OwnerVerificationDocument';
import { VerificationMediaItems } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItems';
import { City } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Cities/City';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const OwnerInformationObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_OwnerInformation:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\OwnerInformation',
};

export const OwnerInformationObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_OwnerInformation:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\OwnerInformation',
} as const;

export type OwnerInformation = {
  /**
   * The full name of the owner
   */
  fullName?: string;
  /**
   * The street name and number of the owner
   */
  streetNameAndNumber?: string;
  /**
   * The postal code of the owner
   */
  postalCode?: string;
  city?: City;
  country?: Country;
  verificationDocument?: OwnerVerificationDocument;
  additionalIdentificationMediaItems?: VerificationMediaItems;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof OwnerInformationObjectType)[keyof typeof OwnerInformationObjectType];
};
