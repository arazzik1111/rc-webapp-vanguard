import { CompanyVerification } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/CompanyVerification';
import { EconomicActivityCodes } from '@models/swagger/App/Domain/Common/Entities/Company/EconomicActivityCodes';
import { LegalEntity } from '@models/swagger/App/Domain/Common/Entities/Company/LegalEntity';
import { RegistrationNumber } from '@models/swagger/App/Domain/Common/Entities/Company/RegistrationNumber';
import { TaxIdentificationNumber } from '@models/swagger/App/Domain/Common/Entities/Company/TaxIdentificationNumber';
import { VatId } from '@models/swagger/App/Domain/Common/Entities/Company/VatId';
import { ContactInfos } from '@models/swagger/App/Domain/Common/Entities/ContactInfos/ContactInfos';
import { Persons } from '@models/swagger/App/Domain/Common/Entities/Persons/Persons';

export const CompanyObjectType = {
  App_Domain_Common_Entities_Company_Company: 'App\\Domain\\Common\\Entities\\Company\\Company',
};

export const CompanyObjectTypeStrict = {
  App_Domain_Common_Entities_Company_Company: 'App\\Domain\\Common\\Entities\\Company\\Company',
} as const;

export type Company = {
  representatives?: Persons;
  contactInfos?: ContactInfos;
  legalEntity?: LegalEntity;
  registrationNumber?: RegistrationNumber;
  taxIdentificationNumber?: TaxIdentificationNumber;
  economicActivityCodes?: EconomicActivityCodes;
  vatId?: VatId;
  companyVerification?: CompanyVerification;
  /**
   * The public name of the busines (in USA calld Doing UberallBusiness as - DBA name), e.g. Ricks Cafe, can differ from companyname string|null
   */
  doingBusinessAsName?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CompanyObjectType)[keyof typeof CompanyObjectType];
};
