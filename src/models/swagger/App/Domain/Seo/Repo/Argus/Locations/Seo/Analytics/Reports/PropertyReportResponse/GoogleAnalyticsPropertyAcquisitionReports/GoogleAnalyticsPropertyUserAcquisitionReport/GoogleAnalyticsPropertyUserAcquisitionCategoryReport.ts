import { GoogleAnalyticsPropertyAcquisitionSubcategoryReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyAcquisitionSubcategoryReport';

export const GoogleAnalyticsPropertyUserAcquisitionCategoryReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyUserAcquisitionReport_GoogleAnalyticsPropertyUserAcquisitionCategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyUserAcquisitionReport\\GoogleAnalyticsPropertyUserAcquisitionCategoryReport',
};

export const GoogleAnalyticsPropertyUserAcquisitionCategoryReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyUserAcquisitionReport_GoogleAnalyticsPropertyUserAcquisitionCategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyUserAcquisitionReport\\GoogleAnalyticsPropertyUserAcquisitionCategoryReport',
} as const;

export type GoogleAnalyticsPropertyUserAcquisitionCategoryReport = {
  /**
   * Users that have 0 previous sessions
   */
  newUsers?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The number of sessions that lasted longer than 10 seconds, or had a conversion event, or had 2 or more screen views
   */
  engagedSessions?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The percentage of engaged sessions (Engaged sessions divided by Sessions)
   */
  engagementRate?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * Number of engaged sessions per user
   */
  engagedSessionsPerUser?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
  /**
   * The average length of time that the app was in the foreground, or the website had focus in the browser
   */
  averageEngagementTime?: GoogleAnalyticsPropertyAcquisitionSubcategoryReport[];
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
  objectType: (typeof GoogleAnalyticsPropertyUserAcquisitionCategoryReportObjectType)[keyof typeof GoogleAnalyticsPropertyUserAcquisitionCategoryReportObjectType];
};
