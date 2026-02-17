export const SpecialAdCategorySpecialAdCategory = {
  NONE: 'NONE',
  CREDIT: 'CREDIT',
  EMPLOYMENT: 'EMPLOYMENT',
  HOUSING: 'HOUSING',
  ISSUES_ELECTIONS_POLITICS: 'ISSUES_ELECTIONS_POLITICS',
  ONLINE_GAMBLING_AND_GAMING: 'ONLINE_GAMBLING_AND_GAMING',
};

export const SpecialAdCategorySpecialAdCategoryStrict = {
  NONE: 'NONE',
  CREDIT: 'CREDIT',
  EMPLOYMENT: 'EMPLOYMENT',
  HOUSING: 'HOUSING',
  ISSUES_ELECTIONS_POLITICS: 'ISSUES_ELECTIONS_POLITICS',
  ONLINE_GAMBLING_AND_GAMING: 'ONLINE_GAMBLING_AND_GAMING',
} as const;

export const SpecialAdCategoryObjectType = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_SpecialAdCategory:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\SpecialAdCategory',
};

export const SpecialAdCategoryObjectTypeStrict = {
  App_Domain_Ads_Entities_Locations_Engagement_Boosts_Settings_SpecialAdCategory:
    'App\\Domain\\Ads\\Entities\\Locations\\Engagement\\Boosts\\Settings\\SpecialAdCategory',
} as const;

export type SpecialAdCategory = {
  /**
   *
   *  Allowed Values:
   * -   `NONE`
   * -   `CREDIT`
   * -   `EMPLOYMENT`
   * -   `HOUSING`
   * -   `ISSUES_ELECTIONS_POLITICS`
   * -   `ONLINE_GAMBLING_AND_GAMING`
   *
   */
  specialAdCategory?: (typeof SpecialAdCategorySpecialAdCategory)[keyof typeof SpecialAdCategorySpecialAdCategory];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof SpecialAdCategoryObjectType)[keyof typeof SpecialAdCategoryObjectType];
};
