import { DateValueSequence } from '@models/swagger/App/Domain/Common/Entities/Charts/DateValueSequence';

export const GoogleAnalyticsPropertyAcquisitionSubcategoryReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyAcquisitionSubcategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyAcquisitionSubcategoryReport',
};

export const GoogleAnalyticsPropertyAcquisitionSubcategoryReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyAcquisitionReports_GoogleAnalyticsPropertyAcquisitionSubcategoryReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyAcquisitionReports\\GoogleAnalyticsPropertyAcquisitionSubcategoryReport',
} as const;

export type GoogleAnalyticsPropertyAcquisitionSubcategoryReport = {
  /**
   * The sum of all values for the subcategory
   */
  sum?: number;
  dateValues?: DateValueSequence;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyAcquisitionSubcategoryReportObjectType)[keyof typeof GoogleAnalyticsPropertyAcquisitionSubcategoryReportObjectType];
};
