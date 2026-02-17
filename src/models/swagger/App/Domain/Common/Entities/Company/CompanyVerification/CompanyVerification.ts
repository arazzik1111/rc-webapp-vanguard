import { BusinessInformation } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/BusinessInformation';
import { OwnerInformation } from '@models/swagger/App/Domain/Common/Entities/Company/CompanyVerification/OwnerInformation';

export const CompanyVerificationCapacity = {
  ORGANISATION: 'ORGANISATION',
  INDIVIDUAL: 'INDIVIDUAL',
};

export const CompanyVerificationCapacityStrict = {
  ORGANISATION: 'ORGANISATION',
  INDIVIDUAL: 'INDIVIDUAL',
} as const;

export const CompanyVerificationServices = {
  OWN: 'OWN',
  OTHERS: 'OTHERS',
};

export const CompanyVerificationServicesStrict = {
  OWN: 'OWN',
  OTHERS: 'OTHERS',
} as const;

export const CompanyVerificationObjectType = {
  App_Domain_Common_Entities_Company_CompanyVerification_CompanyVerification:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\CompanyVerification',
};

export const CompanyVerificationObjectTypeStrict = {
  App_Domain_Common_Entities_Company_CompanyVerification_CompanyVerification:
    'App\\Domain\\Common\\Entities\\Company\\CompanyVerification\\CompanyVerification',
} as const;

export type CompanyVerification = {
  /**
   * Business operating in Organisation Capacity or Individual Capacity
   *  Allowed Values:
   * -   `ORGANISATION`: Business operating in Organisation Capacity
   * -   `INDIVIDUAL`: Business operating in Individual Capacity
   *
   */
  capacity?: (typeof CompanyVerificationCapacity)[keyof typeof CompanyVerificationCapacity];
  /**
   * Promoting own products/services or someone else's products/services
   *  Allowed Values:
   * -   `OWN`: Promoting own products/services
   * -   `OTHERS`: Promoting someone else's products/services
   *
   */
  services?: (typeof CompanyVerificationServices)[keyof typeof CompanyVerificationServices];
  businessInformation?: BusinessInformation;
  ownerInformation?: OwnerInformation;
  /**
   * The id of the location
   */
  locationId?: number;
  /**
   * Whether the identification details are complete or not
   */
  complete?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof CompanyVerificationObjectType)[keyof typeof CompanyVerificationObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
