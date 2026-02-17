import { GoogleAnalyticsProperty } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/GoogleAnalyticsProperty';

export const GoogleAnalyticsPropertiesObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_GoogleAnalyticsProperties:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\GoogleAnalyticsProperties',
};

export const GoogleAnalyticsPropertiesObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_GoogleAnalyticsProperties:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\GoogleAnalyticsProperties',
} as const;

export type GoogleAnalyticsProperties = {
  elements?: GoogleAnalyticsProperty[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertiesObjectType)[keyof typeof GoogleAnalyticsPropertiesObjectType];
};
