export const GoogleAnalyticsPropertyStatisticsReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyStatisticsReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyStatisticsReport',
};

export const GoogleAnalyticsPropertyStatisticsReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyStatisticsReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyStatisticsReport',
} as const;

export type GoogleAnalyticsPropertyStatisticsReport = {
  /**
   * The number of total users
   */
  totalUsers?: number;
  /**
   * The number of new users
   */
  newUsers?: number;
  /**
   * The total engagement time divided by the total number of sessions
   */
  averageEngagementDuration?: number;
  /**
   * The number of app screens or web pages viewed
   */
  screenPageViews?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyStatisticsReportObjectType)[keyof typeof GoogleAnalyticsPropertyStatisticsReportObjectType];
};
