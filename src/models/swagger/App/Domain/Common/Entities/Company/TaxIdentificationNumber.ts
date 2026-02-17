export const TaxIdentificationNumberObjectType = {
  App_Domain_Common_Entities_Company_TaxIdentificationNumber:
    'App\\Domain\\Common\\Entities\\Company\\TaxIdentificationNumber',
};

export const TaxIdentificationNumberObjectTypeStrict = {
  App_Domain_Common_Entities_Company_TaxIdentificationNumber:
    'App\\Domain\\Common\\Entities\\Company\\TaxIdentificationNumber',
} as const;

export type TaxIdentificationNumber = {
  /**
   * The unique Company local tax identification number e.g. CUI in RO, UTR in UK, SIRET in FR, CIF in Spain
   */
  number?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof TaxIdentificationNumberObjectType)[keyof typeof TaxIdentificationNumberObjectType];
};
