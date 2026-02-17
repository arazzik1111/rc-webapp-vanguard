import { AnalyticsPropertyReport } from '@models/swagger/App/Domain/Seo/Entities/Locations/Seo/Analytics/Google/Properties/Reports/AnalyticsPropertyReport';

export const AnalyticsPropertyReportsObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_Reports_AnalyticsPropertyReports:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\Reports\\AnalyticsPropertyReports',
};

export const AnalyticsPropertyReportsObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_Reports_AnalyticsPropertyReports:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\Reports\\AnalyticsPropertyReports',
} as const;

export type AnalyticsPropertyReports = {
  /**
   * The id of the property used for the reports
   */
  propertyId?: number;
  /**
   * The start date of the reports
   */
  startDate?: string;
  /**
   * The end date of the reports
   */
  endDate?: string;
  elements?: AnalyticsPropertyReport[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AnalyticsPropertyReportsObjectType)[keyof typeof AnalyticsPropertyReportsObjectType];
};
