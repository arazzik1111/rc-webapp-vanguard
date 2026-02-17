export const RegistrationNumberObjectType = {
  App_Domain_Common_Entities_Company_RegistrationNumber: 'App\\Domain\\Common\\Entities\\Company\\RegistrationNumber',
};

export const RegistrationNumberObjectTypeStrict = {
  App_Domain_Common_Entities_Company_RegistrationNumber: 'App\\Domain\\Common\\Entities\\Company\\RegistrationNumber',
} as const;

export type RegistrationNumber = {
  /**
   * The registration number of the company
   */
  number?: string;
  /**
   * The commercial register's office name or city where the company is registrered at
   */
  commercialRegistryOffice?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof RegistrationNumberObjectType)[keyof typeof RegistrationNumberObjectType];
};
