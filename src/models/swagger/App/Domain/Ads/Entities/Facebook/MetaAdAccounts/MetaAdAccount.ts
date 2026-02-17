import { FundingSourceDetails } from '@models/swagger/App/Domain/Ads/Entities/Facebook/FundingSourceDetails';
import { Currency } from '@models/swagger/App/Domain/Common/Entities/Money/Currency';

export const MetaAdAccountStatus = {
  1: '1',
  101: '101',
  100: '100',
};

export const MetaAdAccountStatusStrict = {
  1: '1',
  101: '101',
  100: '100',
} as const;

export const MetaAdAccountObjectType = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccounts_MetaAdAccount:
    'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccounts\\MetaAdAccount',
};

export const MetaAdAccountObjectTypeStrict = {
  App_Domain_Ads_Entities_Facebook_MetaAdAccounts_MetaAdAccount:
    'App\\Domain\\Ads\\Entities\\Facebook\\MetaAdAccounts\\MetaAdAccount',
} as const;

export type MetaAdAccount = {
  /**
   * The externalId of the ad account
   */
  externalId?: string;
  /**
   * The Meta Ad Account's status
   *  Allowed Values:
   * -   `1`
   * -   `101`
   * -   `100`
   *
   */
  status?: (typeof MetaAdAccountStatus)[keyof typeof MetaAdAccountStatus];
  /**
   * The Meta Ad Account's ID with the act_ prefix
   */
  actId?: string;
  /**
   * The name of the Meta Ad Account
   */
  name?: string;
  currency?: Currency;
  fundingSourceDetails?: FundingSourceDetails;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof MetaAdAccountObjectType)[keyof typeof MetaAdAccountObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
