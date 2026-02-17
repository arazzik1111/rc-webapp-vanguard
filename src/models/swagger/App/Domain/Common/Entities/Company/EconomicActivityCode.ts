export const EconomicActivityCodeObjectType = {
  App_Domain_Common_Entities_Company_EconomicActivityCode:
    'App\\Domain\\Common\\Entities\\Company\\EconomicActivityCode',
};

export const EconomicActivityCodeObjectTypeStrict = {
  App_Domain_Common_Entities_Company_EconomicActivityCode:
    'App\\Domain\\Common\\Entities\\Company\\EconomicActivityCode',
} as const;

export type EconomicActivityCode = {
  /**
   * The economic activity code, e.g. CAEN in Romania, APE in France, SIC in UK, CNAE codes in Span etc.
   */
  code?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof EconomicActivityCodeObjectType)[keyof typeof EconomicActivityCodeObjectType];
};
