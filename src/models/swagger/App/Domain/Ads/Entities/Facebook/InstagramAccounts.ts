import { InstagramAccount } from '@models/swagger/App/Domain/Ads/Entities/Facebook/InstagramAccount';

export const InstagramAccountsObjectType = {
  App_Domain_Ads_Entities_Facebook_InstagramAccounts: 'App\\Domain\\Ads\\Entities\\Facebook\\InstagramAccounts',
};

export const InstagramAccountsObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_InstagramAccounts: 'App\\Domain\\Ads\\Entities\\Facebook\\InstagramAccounts',
} as const;

export type InstagramAccounts = {
  elements?: InstagramAccount[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof InstagramAccountsObjectType)[keyof typeof InstagramAccountsObjectType];
};
