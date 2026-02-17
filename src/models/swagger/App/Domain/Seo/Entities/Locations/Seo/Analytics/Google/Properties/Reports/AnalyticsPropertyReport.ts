import { GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyTrafficAcquisitionReport/GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport';
import { GoogleAnalyticsPropertyTrafficAcquisitionReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyTrafficAcquisitionReport/GoogleAnalyticsPropertyTrafficAcquisitionReport';
import { GoogleAnalyticsPropertyUserAcquisitionCategoryReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyUserAcquisitionReport/GoogleAnalyticsPropertyUserAcquisitionCategoryReport';
import { GoogleAnalyticsPropertyUserAcquisitionReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyUserAcquisitionReport/GoogleAnalyticsPropertyUserAcquisitionReport';
import { GoogleAnalyticsPropertyEngagementTimeReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyEngagementTimeReport';
import { GoogleAnalyticsPropertyStatisticsReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyStatisticsReport';
import { GoogleAnalyticsPropertyTotalUsersReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyTotalUsersReport';
import { GoogleAnalyticsPropertyUsersByAgeReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyUsersByAgeReport';
import { GoogleAnalyticsPropertyUsersByGenderReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyUsersByGenderReport';

export const AnalyticsPropertyReportReportType = {
  STATISTICS: 'STATISTICS',
  TOTAL_USERS: 'TOTAL_USERS',
  ENGAGEMENT_TIME: 'ENGAGEMENT_TIME',
  USERS_BY_AGE: 'USERS_BY_AGE',
  TOTAL_USERS_BY_AGE: 'TOTAL_USERS_BY_AGE',
  USERS_BY_GENDER: 'USERS_BY_GENDER',
  TOTAL_USERS_BY_GENDER: 'TOTAL_USERS_BY_GENDER',
  USER_ACQUISITION: 'USER_ACQUISITION',
  USER_ACQUISITION_DEFAULT: 'USER_ACQUISITION_DEFAULT',
  USER_ACQUISITION_MEDIUM: 'USER_ACQUISITION_MEDIUM',
  USER_ACQUISITION_SOURCE: 'USER_ACQUISITION_SOURCE',
  USER_ACQUISITION_SOURCE_MEDIUM: 'USER_ACQUISITION_SOURCE_MEDIUM',
  USER_ACQUISITION_SOURCE_PLATFORM: 'USER_ACQUISITION_SOURCE_PLATFORM',
  TRAFFIC_ACQUISITION: 'TRAFFIC_ACQUISITION',
  TRAFFIC_ACQUISITION_DEFAULT: 'TRAFFIC_ACQUISITION_DEFAULT',
  TRAFFIC_ACQUISITION_MEDIUM: 'TRAFFIC_ACQUISITION_MEDIUM',
  TRAFFIC_ACQUISITION_SOURCE: 'TRAFFIC_ACQUISITION_SOURCE',
  TRAFFIC_ACQUISITION_SOURCE_MEDIUM: 'TRAFFIC_ACQUISITION_SOURCE_MEDIUM',
  TRAFFIC_ACQUISITION_SOURCE_PLATFORM: 'TRAFFIC_ACQUISITION_SOURCE_PLATFORM',
};

export const AnalyticsPropertyReportReportTypeStrict = {
  STATISTICS: 'STATISTICS',
  TOTAL_USERS: 'TOTAL_USERS',
  ENGAGEMENT_TIME: 'ENGAGEMENT_TIME',
  USERS_BY_AGE: 'USERS_BY_AGE',
  TOTAL_USERS_BY_AGE: 'TOTAL_USERS_BY_AGE',
  USERS_BY_GENDER: 'USERS_BY_GENDER',
  TOTAL_USERS_BY_GENDER: 'TOTAL_USERS_BY_GENDER',
  USER_ACQUISITION: 'USER_ACQUISITION',
  USER_ACQUISITION_DEFAULT: 'USER_ACQUISITION_DEFAULT',
  USER_ACQUISITION_MEDIUM: 'USER_ACQUISITION_MEDIUM',
  USER_ACQUISITION_SOURCE: 'USER_ACQUISITION_SOURCE',
  USER_ACQUISITION_SOURCE_MEDIUM: 'USER_ACQUISITION_SOURCE_MEDIUM',
  USER_ACQUISITION_SOURCE_PLATFORM: 'USER_ACQUISITION_SOURCE_PLATFORM',
  TRAFFIC_ACQUISITION: 'TRAFFIC_ACQUISITION',
  TRAFFIC_ACQUISITION_DEFAULT: 'TRAFFIC_ACQUISITION_DEFAULT',
  TRAFFIC_ACQUISITION_MEDIUM: 'TRAFFIC_ACQUISITION_MEDIUM',
  TRAFFIC_ACQUISITION_SOURCE: 'TRAFFIC_ACQUISITION_SOURCE',
  TRAFFIC_ACQUISITION_SOURCE_MEDIUM: 'TRAFFIC_ACQUISITION_SOURCE_MEDIUM',
  TRAFFIC_ACQUISITION_SOURCE_PLATFORM: 'TRAFFIC_ACQUISITION_SOURCE_PLATFORM',
} as const;

export const AnalyticsPropertyReportObjectType = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_Reports_AnalyticsPropertyReport:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\Reports\\AnalyticsPropertyReport',
};

export const AnalyticsPropertyReportObjectTypeStrict = {
  App_Domain_Seo_Entities_Locations_Seo_Analytics_Google_Properties_Reports_AnalyticsPropertyReport:
    'App\\Domain\\Seo\\Entities\\Locations\\Seo\\Analytics\\Google\\Properties\\Reports\\AnalyticsPropertyReport',
} as const;

export type AnalyticsPropertyReport = {
  /**
   * The type of the property report that is generated
   *  Allowed Values:
   * -   `STATISTICS`: Type for statistics property report
   * -   `TOTAL_USERS`: Type for total users property report
   * -   `ENGAGEMENT_TIME`: Type for engagement time property report
   * -   `USERS_BY_AGE`: Type for users by age property report
   * -   `TOTAL_USERS_BY_AGE`: Type for total users by age property report.
   * This is declared because we couldn't load the total users as well as the new and returning users at the same time.
   * So this is a completion for the REPORT_USERS_BY_AGE type
   * -   `USERS_BY_GENDER`: Type for users by gender property report
   * -   `TOTAL_USERS_BY_GENDER`: Type for total users by gender property report.
   * This is declared because we couldn't load the total users as well as the new and returning users at the same time.
   * So this is a completion for the REPORT_USERS_BY_GENDER type
   * -   `USER_ACQUISITION`: Type for user acquisition property report
   * -   `USER_ACQUISITION_DEFAULT`: Type for user acquisition first user default channel group property report
   * -   `USER_ACQUISITION_MEDIUM`: Type for user acquisition first user medium property report
   * -   `USER_ACQUISITION_SOURCE`: Type for user acquisition first user source property report
   * -   `USER_ACQUISITION_SOURCE_MEDIUM`: Type for user acquisition first user source medium property report
   * -   `USER_ACQUISITION_SOURCE_PLATFORM`: Type for user acquisition first user source platform property report
   * -   `TRAFFIC_ACQUISITION`: Type for traffic acquisition property report
   * -   `TRAFFIC_ACQUISITION_DEFAULT`: Type for traffic acquisition default property report
   * -   `TRAFFIC_ACQUISITION_MEDIUM`: Type for traffic acquisition medium property report
   * -   `TRAFFIC_ACQUISITION_SOURCE`: Type for traffic acquisition source property report
   * -   `TRAFFIC_ACQUISITION_SOURCE_MEDIUM`: Type for traffic acquisition source medium property report
   * -   `TRAFFIC_ACQUISITION_SOURCE_PLATFORM`: Type for traffic acquisition source platform property report
   *
   */
  reportType?: (typeof AnalyticsPropertyReportReportType)[keyof typeof AnalyticsPropertyReportReportType];
  reportDataStatistics?: GoogleAnalyticsPropertyStatisticsReport;
  reportDataTotalUsers?: GoogleAnalyticsPropertyTotalUsersReport;
  reportDataEngagementTime?: GoogleAnalyticsPropertyEngagementTimeReport;
  reportDataUsersByAge?: GoogleAnalyticsPropertyUsersByAgeReport;
  reportDataUsersByGender?: GoogleAnalyticsPropertyUsersByGenderReport;
  reportDataUserAcquisition?: GoogleAnalyticsPropertyUserAcquisitionReport;
  reportDataUserAcquisitionDefault?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  reportDataUserAcquisitionMedium?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  reportDataUserAcquisitionSource?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  reportDataUserAcquisitionSourceMedium?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  reportDataUserAcquisitionSourcePlatform?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  reportDataTrafficAcquisition?: GoogleAnalyticsPropertyTrafficAcquisitionReport;
  reportDataTrafficAcquisitionDefault?: GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport;
  reportDataTrafficAcquisitionMedium?: GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport;
  reportDataTrafficAcquisitionSource?: GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport;
  reportDataTrafficAcquisitionSourceMedium?: GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport;
  reportDataTrafficAcquisitionSourcePlatform?: GoogleAnalyticsPropertyTrafficAcquisitionCategoryReport;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof AnalyticsPropertyReportObjectType)[keyof typeof AnalyticsPropertyReportObjectType];
};
