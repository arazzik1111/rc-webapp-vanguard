export const KeywordBusinessLocationRankingScreenshotObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_KeywordBusinessLocationRankingScreenshot:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\KeywordBusinessLocationRankingScreenshot',
};

export const KeywordBusinessLocationRankingScreenshotObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Rankings_KeywordBusinessLocationRankingScreenshot:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Rankings\\KeywordBusinessLocationRankingScreenshot',
} as const;

export type KeywordBusinessLocationRankingScreenshot = {
  /**
   * Base 64 encoded image content
   */
  imageContent?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof KeywordBusinessLocationRankingScreenshotObjectType)[keyof typeof KeywordBusinessLocationRankingScreenshotObjectType];
};
