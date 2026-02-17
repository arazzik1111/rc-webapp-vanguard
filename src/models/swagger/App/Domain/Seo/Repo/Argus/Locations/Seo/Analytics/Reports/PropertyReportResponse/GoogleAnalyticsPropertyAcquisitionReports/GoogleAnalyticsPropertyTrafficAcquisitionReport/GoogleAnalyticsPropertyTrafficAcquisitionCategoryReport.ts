import { GoogleAnalyticsPropertyAcquisitionSubcategoryReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyAcquisitionSubcategoryReport';

export const GoogleAnalyticsPropertyTrafficAcquisitionCategoryReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyTrafficAcquisitionReport_GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyTrafficAcquisitionReport\\GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport',
};

export const GoogleAnalyticsPropertyTrafficAcquisitionCategoryReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyTrafficAcquisitionReport_GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyTrafficAcquisitionReport\\GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport',
} as const;

export type GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport = {
  /**
   * The number of distinct users who visited your site or app.
   */
  users?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The number of sessions that began on your site or app
   */
  sessions?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The number of sessions that lasted longer than 10 seconds, or had a conversion event, or had 2 or more screen views
   */
  engagedSessions?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * User engagement duration per session
   */
  averageEngagementTime?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * Number of engaged sessions per user
   */
  engagedSessionsPerUser?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The average number of events per session
   */
  eventsPerSession?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The percentage of engaged sessions (Engaged sessions divided by Sessions)
   */
  engagementRate?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The count of events
   */
  eventCount?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The count of conversion events
   */
  conversions?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The sum of revenue from purchases, subscriptions, and advertising
   */
  totalRevenue?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * In case we don't have available data starting from the startDate, we determine the first available date for the report
   */
  firstAvailableDate?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyTrafficAcquisitionCategoryReportObjectType)[keyof typeof GoogleAnalyticsPropertyTrafficAcquisitionCategoryReportObjectType];
};
