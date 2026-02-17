export const LocationVisibilityIndexSettingObjectType = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_LocationVisibilityIndexSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\LocationVisibilityIndexSetting',
};

export const LocationVisibilityIndexSettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Locations_VisibilityIndex_LocationVisibilityIndexSetting:
    'App\\Domain\\Presence\\Entities\\Locations\\VisibilityIndex\\LocationVisibilityIndexSetting',
} as const;

export type LocationVisibilityIndexSetting = {
  /**
   * Start date for general visibility index
   */
  startDate?: string;
  /**
   * Start date for SEO visibility index
   */
  startDateSeo?: string;
  /**
   * Start date for social media visibility index
   */
  startDateSocialMedia?: string;
  /**
   * Start date for local visbility index
   */
  startDateLocal?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof LocationVisibilityIndexSettingObjectType)[keyof typeof LocationVisibilityIndexSettingObjectType];
  /**
   * The internal identifier of the entity
   */
  id?: number;
};
