import { GoogleAnalyticsPropertyUserAcquisitionCategoryReport } from '@models/swagger/App/Domain/Seo/Repo/Argus/Locations/Seo/Analytics/Reports/PropertyReportResponse/GoogleAnalyticsPropertyAcquisitionReports/GoogleAnalyticsPropertyUserAcquisitionReport/GoogleAnalyticsPropertyUserAcquisitionCategoryReport';

export const GoogleAnalyticsPropertyUserAcquisitionReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyUserAcquisitionReport_GoogleAnalyticsPropertyUserAcquisitionReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyUserAcquisitionReport\\GoogleAnalyticsPropertyUserAcquisitionReport',
};

export const GoogleAnalyticsPropertyUserAcquisitionReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyUserAcquisitionReport_GoogleAnalyticsPropertyUserAcquisitionReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyUserAcquisitionReport\\GoogleAnalyticsPropertyUserAcquisitionReport',
} as const;

export type GoogleAnalyticsPropertyUserAcquisitionReport = {
  firstUserDefaultChannelGroup?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  firstUserMedium?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  firstUserSource?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  firstUserSourceMedium?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  firstUserSourcePlatform?: GoogleAnalyticsPropertyUserAcquisitionCategoryReport;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyUserAcquisitionReportObjectType)[keyof typeof GoogleAnalyticsPropertyUserAcquisitionReportObjectType];
};
