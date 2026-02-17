import { UpsellingPerCountrySettings } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/UpsellingPerCountrySettings';

export const ProductRatePlanUpgradeMethodUpsellingLinkType = {
  EXTERNAL_GENERIC: 'EXTERNAL_GENERIC',
  EXTERNAL_ACCOUNT_SPECIFIC: 'EXTERNAL_ACCOUNT_SPECIFIC',
  INTERNAL_GENERIC: 'INTERNAL_GENERIC',
  INTERNAL_PARTNER_SPECIFIC: 'INTERNAL_PARTNER_SPECIFIC',
};

export const ProductRatePlanUpgradeMethodUpsellingLinkTypeStrict = {
  EXTERNAL_GENERIC: 'EXTERNAL_GENERIC',
  EXTERNAL_ACCOUNT_SPECIFIC: 'EXTERNAL_ACCOUNT_SPECIFIC',
  INTERNAL_GENERIC: 'INTERNAL_GENERIC',
  INTERNAL_PARTNER_SPECIFIC: 'INTERNAL_PARTNER_SPECIFIC',
} as const;

export const ProductRatePlanUpgradeMethodObjectType = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgradeMethod:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgradeMethod',
};

export const ProductRatePlanUpgradeMethodObjectTypeStrict = {
  App_Domain_Product_Entities_ProductRatePlans_Upgrades_ProductRatePlanUpgradeMethod:
    'App\\Domain\\Product\\Entities\\ProductRatePlans\\Upgrades\\ProductRatePlanUpgradeMethod',
} as const;

export type ProductRatePlanUpgradeMethod = {
  /**
   * The type of landingpage the customer should be redirected to
   *  Allowed Values:
   * -   `EXTERNAL_GENERIC`: Link is redirecting to an generic external landingpage on the partner's platform that is not specific per customer, or calls a generic javascript function
   * -   `EXTERNAL_ACCOUNT_SPECIFIC`: Link is redirecting to an external landingpage that has to be generated individually for the current account, or calls an account specific javascript function
   * -   `INTERNAL_GENERIC`: Link is redirecting to default internal upselling landingpage
   * -   `INTERNAL_PARTNER_SPECIFIC`: Link is redirecting to a partner specific internal upselling landingpage
   *
   */
  upsellingLinkType?: (typeof ProductRatePlanUpgradeMethodUpsellingLinkType)[keyof typeof ProductRatePlanUpgradeMethodUpsellingLinkType];
  /**
   * The URL of the the customer should be redirected to, or the javascript that has to be executed on click
   */
  upsellingLink?: string;
  upsellingLinksPerCountry?: UpsellingPerCountrySettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductRatePlanUpgradeMethodObjectType)[keyof typeof ProductRatePlanUpgradeMethodObjectType];
};
