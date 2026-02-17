import { GoogleAnalyticsPropertyDataStreams } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/DataStreams/GoogleAnalyticsPropertyDataStreams';

export const GoogleAnalyticsPropertyObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_GoogleAnalyticsProperty:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\GoogleAnalyticsProperty',
};

export const GoogleAnalyticsPropertyObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_GoogleAnalyticsProperty:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\GoogleAnalyticsProperty',
} as const;

export type GoogleAnalyticsProperty = {
  /**
   * The name of the Google Analytics property
   */
  name?: string;
  /**
   * The identifier of the Google Analytics property
   */
  propertyId?: number;
  /**
   * The displayed name given by the user for the Google Analytics property
   */
  displayName?: string;
  /**
   * The creation time for the Google Analytics property
   */
  createTime?: string;
  /**
   * The update time for the Google Analytics property
   */
  updateTime?: string;
  dataStreams?: GoogleAnalyticsPropertyDataStreams;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyObjectType)[keyof typeof GoogleAnalyticsPropertyObjectType];
};
