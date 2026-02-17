export const DirectorySettingObjectType = {
  App_Domain_Presence_Entities_Directories_Settings_DirectorySetting:
    'App\\Domain\\Presence\\Entities\\Directories\\Settings\\DirectorySetting',
};

export const DirectorySettingObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_Settings_DirectorySetting:
    'App\\Domain\\Presence\\Entities\\Directories\\Settings\\DirectorySetting',
} as const;

export type DirectorySetting = {
  /**
   * The average duration in seconds until listings are created
   */
  timeToCreate?: number;
  /**
   * The average duration in seconds until listings are updated
   */
  timeToUpdate?: number;
  /**
   * Example of a Review Source Url
   */
  reviewSourceExampleUrl?: string;
  /**
   * Whether the directory is connection-based (e.g., GBP, Facebook) or not
   */
  isConnectionBased?: boolean;
  /**
   * Whether the directory can be added as a favorite Review Source
   */
  canBeAddedAsFavoriteReviewSource?: boolean;
  /**
   * The maximum number of reviews that a Review Source can provide for a listing
   */
  maxReviewCount?: number;
  /**
   * Whether the Review Source has a Url or not
   */
  hasNoReviewSourceUrl?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectorySettingObjectType)[keyof typeof DirectorySettingObjectType];
};
