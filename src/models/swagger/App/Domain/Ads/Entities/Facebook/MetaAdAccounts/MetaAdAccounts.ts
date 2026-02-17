import { MetaAdAccount } from '@models/swagger/App/Domain/Ads/Entities/Facebook/MetaAdAccounts/MetaAdAccount';

export const MetaAdAccountsObjectType = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccounts_MetaAdAccounts:
    'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccounts\\MetaAdAccounts',
};

export const MetaAdAccountsObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccounts_MetaAdAccounts:
    'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccounts\\MetaAdAccounts',
} as const;

export type MetaAdAccounts = {
  elements?: MetaAdAccount[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaAdAccountsObjectType)[keyof typeof MetaAdAccountsObjectType];
};
