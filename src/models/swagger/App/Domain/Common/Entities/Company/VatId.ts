export const VatIdObjectType = {
  App_Domain_Common_Entities_Company_VatId: 'App\\Domain\\Common\\Entities\\Company\\VatId',
};

export const VatIdObjectTypeStrict = {
  App_Domain_Common_Entities_Company_VatId: 'App\\Domain\\Common\\Entities\\Company\\VatId',
} as const;

export type VatId = {
  /**
   * The VAT identification number of the company
   */
  vatId?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof VatIdObjectType)[keyof typeof VatIdObjectType];
};
