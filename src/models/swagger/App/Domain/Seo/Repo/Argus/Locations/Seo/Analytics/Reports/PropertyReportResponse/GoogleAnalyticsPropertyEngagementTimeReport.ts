import { DateValueSequence } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValueSequence';

export const GoogleAnalyticsPropertyEngagementTimeReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyEngagementTimeReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyEngagementTimeReport',
};

export const GoogleAnalyticsPropertyEngagementTimeReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyEngagementTimeReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyEngagementTimeReport',
} as const;

export type GoogleAnalyticsPropertyEngagementTimeReport = {
  averageEngagement?: DateValueSequence;
  /**
   * The final average engagement time divided by the total number of sessions for the whole date range
   */
  totalAverageEngagement?: number;
  averageEngagementPerEngagedSession?: DateValueSequence;
  /**
   * The final average engagement time divided by the total number of engaged sessions for the whole date range
   */
  totalAverageEngagementPerEngagedSession?: number;
  /**
   * In case we don't have available data starting from the startDate, we determine the first available date for the report
   */
  firstAvailableDate?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyEngagementTimeReportObjectType)[keyof typeof GoogleAnalyticsPropertyEngagementTimeReportObjectType];
};
