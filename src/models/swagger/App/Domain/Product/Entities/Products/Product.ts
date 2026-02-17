import { FeatureFlagsBundles } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/FeatureFlagsBundles';
import { ProductFeatureFlagsBundles } from '@models/swagger/App/Domain/Product/Entities/Products/FeatureFlagsBundles/ProductFeatureFlagsBundles';

export const ProductName = {
  RADAR: 'RADAR',
  SEO: 'SEO',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
  REPUTATION: 'REPUTATION',
  BUNLDE_360: 'BUNLDE_360',
  SOCIAL: 'SOCIAL',
};

export const ProductNameStrict = {
  RADAR: 'RADAR',
  SEO: 'SEO',
  ADS: 'ADS',
  PRESENCE: 'PRESENCE',
  REPUTATION: 'REPUTATION',
  BUNLDE_360: 'BUNLDE_360',
  SOCIAL: 'SOCIAL',
} as const;

export const ProductObjectType = {
  App_Domain_Product_Entities_Products_Product: 'App\\Domain\\Product\\Entities\\Products\\Product',
};

export const ProductObjectTypeStrict = {
  App_Domain_Product_Entities_Products_Product: 'App\\Domain\\Product\\Entities\\Products\\Product',
} as const;

export type Product = {
  productFeatureFlagsBundles?: ProductFeatureFlagsBundles;
  featureFlagsBundles?: FeatureFlagsBundles;
  /**
   * The descriptive name of the Product
   *  Allowed Values:
   * -   `RADAR`: RADAR Product
   * -   `SEO`: SEO Product
   * -   `ADS`: Ads Product (Google and Social Media Ads)
   * -   `PRESENCE`: Presence Product (without reputation)
   * -   `REPUTATION`: Reputation Product
   * -   `BUNLDE_360`: 360 Product Bundle (Radar, SEO, Ads, Presence, Reputation)
   * -   `SOCIAL`: Social Product
   *
   */
  name?: (typeof ProductName)[keyof typeof ProductName];
  /**
   * The products description
   */
  description?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ProductObjectType)[keyof typeof ProductObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
