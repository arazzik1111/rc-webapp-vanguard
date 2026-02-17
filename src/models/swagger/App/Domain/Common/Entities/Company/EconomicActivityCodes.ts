import { EconomicActivityCode } from '@models/swagger/App/Domain/Common/Entities/Company/EconomicActivityCode';

export const EconomicActivityCodesObjectType = {
  App_Domain_Common_Entities_Company_EconomicActivityCodes:
    'App\\Domain\\Common\\Entities\\Company\\EconomicActivityCodes',
};

export const EconomicActivityCodesObjectTypeStrict = {
  App_Domain_Common_Entities_Company_EconomicActivityCodes:
    'App\\Domain\\Common\\Entities\\Company\\EconomicActivityCodes',
} as const;

export type EconomicActivityCodes = {
  primaryActivityCode?: EconomicActivityCode;
  elements?: EconomicActivityCode[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EconomicActivityCodesObjectType)[keyof typeof EconomicActivityCodesObjectType];
};
