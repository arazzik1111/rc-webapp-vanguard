import { SpecialAdCategory } from '@models/swagger/App/Domain/Ads/Entities/Locations/Engagement/Boosts/Settings/SpecialAdCategory';

export const SpecialAdCategoriesObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_SpecialAdCategories:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\SpecialAdCategories',
};

export const SpecialAdCategoriesObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_SpecialAdCategories:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\SpecialAdCategories',
} as const;

export type SpecialAdCategories = {
  elements?: SpecialAdCategory[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SpecialAdCategoriesObjectType)[keyof typeof SpecialAdCategoriesObjectType];
};
