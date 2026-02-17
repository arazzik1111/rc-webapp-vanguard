export const AffiliateObjectType = {
  App_Domain_Partner_Entities_Affiliates_Affiliate: 'App\\Domain\\Partner\\Entities\\Affiliates\\Affiliate',
};

export const AffiliateObjectTypeStrict = {
  App_Domain_Partner_Entities_Affiliates_Affiliate: 'App\\Domain\\Partner\\Entities\\Affiliates\\Affiliate',
} as const;

export type Affiliate = {
  /**
   * The name of the affiliate
   */
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AffiliateObjectType)[keyof typeof AffiliateObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
