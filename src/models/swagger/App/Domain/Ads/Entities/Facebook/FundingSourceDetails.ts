export const FundingSourceDetailsObjectType = {
  App_Domain_Ads_Entities_Facebook_FundingSourceDetails: 'App\\Domain\\Ads\\Entities\\Facebook\\FundingSourceDetails',
};

export const FundingSourceDetailsObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_FundingSourceDetails: 'App\\Domain\\Ads\\Entities\\Facebook\\FundingSourceDetails',
} as const;

export type FundingSourceDetails = {
  /**
   * The ID of the FundingSource for Meta AdAccount
   */
  paymentId?: string;
  /**
   * The display string of the FundingSource for Meta AdAccount
   */
  displayString?: string;
  /**
   * The type of the FundingSource for Meta AdAccount
   */
  type?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FundingSourceDetailsObjectType)[keyof typeof FundingSourceDetailsObjectType];
};
