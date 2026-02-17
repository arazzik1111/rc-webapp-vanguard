import { GoogleAnalyticsPropertyDataStream } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/DataStreams/GoogleAnalyticsPropertyDataStream';

export const GoogleAnalyticsPropertyDataStreamsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_DataStreams_GoogleAnalyticsPropertyDataStreams:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\DataStreams\\GoogleAnalyticsPropertyDataStreams',
};

export const GoogleAnalyticsPropertyDataStreamsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_DataStreams_GoogleAnalyticsPropertyDataStreams:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\DataStreams\\GoogleAnalyticsPropertyDataStreams',
} as const;

export type GoogleAnalyticsPropertyDataStreams = {
  elements?: GoogleAnalyticsPropertyDataStream[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyDataStreamsObjectType)[keyof typeof GoogleAnalyticsPropertyDataStreamsObjectType];
};
