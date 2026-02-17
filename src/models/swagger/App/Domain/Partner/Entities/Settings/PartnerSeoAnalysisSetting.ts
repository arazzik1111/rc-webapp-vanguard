export const PartnerSeoAnalysisSettingObjectType = {
  App_Domain_Partner_Entities_Settings_PartnerSeoAnalysisSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerSeoAnalysisSetting',
};

export const PartnerSeoAnalysisSettingObjectTypeStrict = {
  App_Domain_Partner_Entities_Settings_PartnerSeoAnalysisSetting:
    'App\\Domain\\Partner\\Entities\\Settings\\PartnerSeoAnalysisSetting',
} as const;

export type PartnerSeoAnalysisSetting = {
  /**
   * If true, the overall optimization is not displayed as a positive value, but instead displayed as % missing to 100
   */
  showCoverChartFeedbackAsNegative?: boolean;
  /**
   * Custom cover chart text to display
   */
  customCoverChartText?: string;
  /**
   * Custom call to action button url
   */
  customCTAUrl?: string;
  /**
   * The score elements applied
   */
  scoreElements?: any[];
  /**
   * If true, custom chart header is applied
   */
  useCustomCharHeader?: boolean;
  /**
   * Custom sub header CSS class
   */
  customSubHeaderCSSClass?: string;
  /**
   * Wheather to display the footer or not
   */
  displayFooter?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof PartnerSeoAnalysisSettingObjectType)[keyof typeof PartnerSeoAnalysisSettingObjectType];
};
