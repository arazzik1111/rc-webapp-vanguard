import { PartnerProductPerCountrySettings } from '@models/swagger/App/Domain/Partner/Entities/Settings/PartnerProductPerCountrySettings';

export const PartnerProdutSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerProdutSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerProdutSetting',
};

export type PartnerProdutSetting = {
  /**
   * Additional licese fee
   */
  additionalLicenseFee?: number;
  /**
   * Net sum charged for initial setup on partners end, used to be displayed e.g. on upselling page
   */
  initialSetupFee?: number;
  /**
   * Sum incl. vat charged for initial setup on partners end, used to be displayed e.g. on upselling page
   */
  initialSetupFeeInclVat?: number;
  /**
   * License is billed only if setup is completed
   */
  billOnlyIfSetupCompleted?: boolean;
  /**
   * If yes, the invoice country currency is used for billing, not the project country
   */
  useInvoiceCountryCurrencyForBilling?: boolean;
  /**
   * Custom URL to redirect the user on logout
   */
  logoutUrl?: string;
  /**
   * Custom Product Url
   */
  productUrl?: string;
  /**
   * If true, logged in accounts will be redirected to application, if they arrive at public site
   */
  redirectLoggedInAccountsToApplication?: boolean;
  /**
   * Subbrand of partner, e.g. child brands using the same provisioning
   */
  partnerSubbrand?: string;
  /**
   * The type of a custom support system used for this partner
   */
  customSupportSystemType?: string;
  /**
   * In case that the rule billOnlyIfSetupCompleted was introduced later, it is applied only to
   * Subscriptions staring after this date. Older subscriptions are billed in any case.
   */
  billOnlyIfSetupCompletedRuleAppliedAfterDate?: string;
  /**
   * external Id provided by partner for upselling purposes
   */
  externalId?: string;
  perCountrySettings?: PartnerProductPerCountrySettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerProdutSettingObjectType)[keyof typeof PartnerProdutSettingObjectType];
};
