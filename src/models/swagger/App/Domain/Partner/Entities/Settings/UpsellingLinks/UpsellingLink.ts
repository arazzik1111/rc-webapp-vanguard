import { ProductRatePlanUpgradeMethod } from '@models/swagger/App/Domain/Product/Entities/ProductRatePlans/Upgrades/ProductRatePlanUpgradeMethod';

export const UpsellingLinkProductName = {
  RADAR: 'RADAR',
  SEO: 'SEO',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
  REPUTATION: 'REPUTATION',
  BUNLDE_360: 'BUNLDE_360',
  SOCIAL: 'SOCIAL',
};

export const UpsellingLinkProductNameStrict = {
  RADAR: 'RADAR',
  SEO: 'SEO',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
  REPUTATION: 'REPUTATION',
  BUNLDE_360: 'BUNLDE_360',
  SOCIAL: 'SOCIAL',
} as const;

export const UpsellingLinkObjectType = {
  App_Domain_Partner_Entities_Settings_UpsellingLinks_UpsellingLink:
    'App\\Domain\\Partner\\Entities\\Settings\\UpsellingLinks\\UpsellingLink',
};

export const UpsellingLinkObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_UpsellingLinks_UpsellingLink:
    'App\\Domain\\Partner\\Entities\\Settings\\UpsellingLinks\\UpsellingLink',
} as const;

export type UpsellingLink = {
  /**
   * if true, users will receive email reports
   *  Allowed Values:
   * -   `RADAR`
   * -   `SEO`
   * -   `ADS`
   * -   `PRESENCE`
   * -   `REPUTATION`
   * -   `BUNLDE_360`
   * -   `SOCIAL`
   *
   */
  productName?: (typeof UpsellingLinkProductName)[keyof typeof UpsellingLinkProductName];
  upsellingMethod?: ProductRatePlanUpgradeMethod;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof UpsellingLinkObjectType)[keyof typeof UpsellingLinkObjectType];
};
