export const GoogleAnalyticsPropertyDataStreamObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_DataStreams_GoogleAnalyticsPropertyDataStream:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\DataStreams\\GoogleAnalyticsPropertyDataStream',
};

export const GoogleAnalyticsPropertyDataStreamObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_DataStreams_GoogleAnalyticsPropertyDataStream:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\DataStreams\\GoogleAnalyticsPropertyDataStream',
} as const;

export type GoogleAnalyticsPropertyDataStream = {
  /**
   * The name of the Google Analytics property data stream
   */
  name?: string;
  /**
   * The displayed name given by the user for the Google Analytics property data stream
   */
  displayName?: string;
  /**
   * The creation time for the Google Analytics property data stream
   */
  createTime?: string;
  /**
   * The update time for the Google Analytics property data stream
   */
  updateTime?: string;
  /**
   * The measurement id for the Google Analytics property data stream, this is a unique identifier for the data stream
   */
  measurementId?: string;
  /**
   * The source for the Google Analytics property data stream, this is usually a domain
   */
  source?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyDataStreamObjectType)[keyof typeof GoogleAnalyticsPropertyDataStreamObjectType];
};
