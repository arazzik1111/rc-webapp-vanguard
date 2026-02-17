export const DirectoryReviewsEngineStatusObjectType = {
  App_Domain_Presence_Entities_Directories_DirectoryReviewsEngineStatus:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryReviewsEngineStatus',
};

export const DirectoryReviewsEngineStatusObjectTypeStrict = {
  App_Domain_Presence_Entities_Directories_DirectoryReviewsEngineStatus:
    'App\\Domain\\Presence\\Entities\\Directories\\DirectoryReviewsEngineStatus',
} as const;

export type DirectoryReviewsEngineStatus = {
  /**
   * If true, the Directory is supported by Argus as a Review Source
   */
  isActiveReviewSource?: boolean;
  /**
   * Country short codes where the directory is supported as a Review Source
   */
  activeCountryShortCodes?: string[];
  /**
   * Contains the directory URLs for active countries
   */
  activeCountryUrls?: any[];
  /**
   * Example Review Source Url
   */
  reviewSourceExampleUrl?: string;
  /**
   * The maximum number of reviews the directory supports
   */
  maxReviewCount?: number;
  name?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsEngineStatusObjectType)[keyof typeof DirectoryReviewsEngineStatusObjectType];
};
