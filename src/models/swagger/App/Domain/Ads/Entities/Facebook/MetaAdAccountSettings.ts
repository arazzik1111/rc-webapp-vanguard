import { Currency } from '@models/swagger/App/Domain/Common/Entities/Money/Currency';

export const MetaAdAccountSettingsObjectType = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccountSettings: 'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccountSettings',
};

export const MetaAdAccountSettingsObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccountSettings: 'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccountSettings',
} as const;

export type MetaAdAccountSettings = {
  currency?: Currency;
  /**
   * The ID of the Meta AdAccount as stored in Meta
   */
  externalId?: string;
  /**
   * Name of the Meta AdAccount
   */
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaAdAccountSettingsObjectType)[keyof typeof MetaAdAccountSettingsObjectType];
};
