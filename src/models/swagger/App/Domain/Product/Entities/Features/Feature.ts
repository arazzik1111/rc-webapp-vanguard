import { FeatureSettings } from '@models/swagger/App/Domain/Product/Entities/Features/FeatureSettings';

export const FeatureType = {
  seo: 'seo',
  ads: 'ads',
  presence: 'presence',
  reputation: 'reputation',
  lvi: 'lvi',
  gmb: 'gmb',
  agency: 'agency',
  agency_tools: 'agency_tools',
  radarradar: 'radarradar',
  jumpstart: 'jumpstart',
  premium_support: 'premium_support',
  engagement: 'engagement',
  boosts: 'boosts',
};

export const FeatureTypeStrict = {
  seo: 'seo',
  ads: 'ads',
  presence: 'presence',
  reputation: 'reputation',
  lvi: 'lvi',
  gmb: 'gmb',
  agency: 'agency',
  agency_tools: 'agency_tools',
  radarradar: 'radarradar',
  jumpstart: 'jumpstart',
  premium_support: 'premium_support',
  engagement: 'engagement',
  boosts: 'boosts',
} as const;

export const FeatureObjectType = {
  App_Domain_Product_Entities_Features_Feature: 'App\\Domain\\Product\\Entities\\Features\\Feature',
};

export const FeatureObjectTypeStrict = {
  App_Domain_Product_Entities_Features_Feature: 'App\\Domain\\Product\\Entities\\Features\\Feature',
} as const;

export type Feature = {
  /**
   * The feature type
   *  Allowed Values:
   * -   `seo`: The feature type SEO
   * -   `ads`: The feature type ADS
   * -   `presence`: The feature type PRESENCE
   * -   `reputation`: The feature type REPUTATION
   * -   `lvi`: The feature type LVI
   * -   `gmb`: The feature type GMB
   * -   `agency`: The feature type AGENCY
   * -   `agency_tools`: The feature type AGENCY_TOOLS
   * -   `radarradar`
   * -   `jumpstart`: The feature type RADAR
   * -   `premium_support`: The feature type PREMIUM_SUPPORT
   * -   `engagement`: The feature type ENGAGEMENT
   * -   `boosts`: The feature type BOOSTS
   *
   */
  type?: (typeof FeatureType)[keyof typeof FeatureType];
  /**
   * The priority of the feature
   */
  priority?: number;
  settings?: FeatureSettings;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof FeatureObjectType)[keyof typeof FeatureObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
