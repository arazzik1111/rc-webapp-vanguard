export const LegalEntityObjectType = {
  App_Domain_Common_Entities_Company_LegalEntity: 'App\\Domain\\Common\\Entities\\Company\\LegalEntity',
};

export const LegalEntityObjectTypeStrict = {
  App_Domain_Common_Entities_Company_LegalEntity: 'App\\Domain\\Common\\Entities\\Company\\LegalEntity',
} as const;

export type LegalEntity = {
  /**
   * The legal entity name (compaby bane, e.g. Tesla) string|null
   */
  name?: string;
  /**
   * The legal entity name (compaby bane, e.g. Tesla) string|null
   */
  fullName?: string;
  /**
   * The legal entity type, e.g. LLC, INC, SRL, GmbH, AG string|null
   */
  type?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LegalEntityObjectType)[keyof typeof LegalEntityObjectType];
};
