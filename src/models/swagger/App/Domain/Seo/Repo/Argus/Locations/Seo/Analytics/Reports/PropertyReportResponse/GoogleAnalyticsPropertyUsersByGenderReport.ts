export const GoogleAnalyticsPropertyUsersByGenderReportObjectType = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyUsersByGenderReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyUsersByGenderReport',
};

export const GoogleAnalyticsPropertyUsersByGenderReportObjectTypeStrict = {
  App_Domain_Seo_Repo_Argus_Locations_Seo_Analytics_Reports_PropertyReportResponse_GoogleAnalyticsPropertyUsersByGenderReport:
    'App\\Domain\\Seo\\Repo\\Argus\\Locations\\Seo\\Analytics\\Reports\\PropertyReportResponse\\GoogleAnalyticsPropertyUsersByGenderReport',
} as const;

export type GoogleAnalyticsPropertyUsersByGenderReport = {
  /**
   * Users for which we do not get the previous sessions
   */
  users?: any[];
  /**
   * Users that have 0 previous sessions
   */
  newUsers?: any[];
  /**
   * Users that have 1 or more than 1 previous sessions
   */
  returningUsers?: any[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof GoogleAnalyticsPropertyUsersByGenderReportObjectType)[keyof typeof GoogleAnalyticsPropertyUsersByGenderReportObjectType];
};
