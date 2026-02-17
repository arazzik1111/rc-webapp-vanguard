import { DateValueSequence } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValueSequence';

export const GoogleAnalyticsPropertyTotalUsersReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyTotalUsersReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyTotalUsersReport',
};

export const GoogleAnalyticsPropertyTotalUsersReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyTotalUsersReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyTotalUsersReport',
} as const;

export type GoogleAnalyticsPropertyTotalUsersReport = {
  users?: DateValueSequence;
  /**
   * The sum of all users
   */
  sumUsers?: number;
  newUsers?: DateValueSequence;
  /**
   * The sum of all new users
   */
  sumNewUsers?: number;
  returningUsers?: DateValueSequence;
  /**
   * The sum of all returning users
   */
  sumReturningUsers?: number;
  /**
   * In case we don't have available data starting from the startDate, we determine the first available date for the report
   */
  firstAvailableDate?: string;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyTotalUsersReportObjectType)[keyof typeof GoogleAnalyticsPropertyTotalUsersReportObjectType];
};
