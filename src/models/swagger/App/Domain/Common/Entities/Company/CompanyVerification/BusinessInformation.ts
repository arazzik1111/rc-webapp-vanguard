import { VerificationMediaItems } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/MediaItems/VerificationMediaItems';
import { City } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Cities/City';
import { Country } from '@models/swagger/App/Domain/Common/Entities/PoliticalEntities/Countries/Country';

export const BusinessInformationObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_BusinessInformation:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\BusinessInformation',
};

export const BusinessInformationObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_BusinessInformation:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\BusinessInformation',
} as const;

export type BusinessInformation = {
  /**
   * The registration number of the business
   */
  registrationNumber?: string;
  /**
   * The legal name of the business
   */
  legalName?: string;
  /**
   * The legal street name and number of the business
   */
  streetNameAndNumber?: string;
  /**
   * The legal postal code of the business
   */
  postalCode?: string;
  city?: City;
  country?: Country;
  /**
   * The business industry of the business
   */
  businessIndustry?: string;
  verificationMediaItems?: VerificationMediaItems;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof BusinessInformationObjectType)[keyof typeof BusinessInformationObjectType];
};
