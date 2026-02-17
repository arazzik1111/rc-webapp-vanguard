import { Locale } from '@models/swagger/App/Domain/Common/Entities/Locales/Locale';

export const ReputationSummaryObjectType = {
  App_Domain_Reputation_Entities_Reputation_Summary_ReputationSummary:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Summary\\ReputationSummary',
};

export const ReputationSummaryObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Summary_ReputationSummary:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Summary\\ReputationSummary',
} as const;

export type ReputationSummary = {
  /**
   * Start date from first considered Review
   */
  startDate?: string;
  /**
   * End date from last considered Review
   */
  endDate?: string;
  interfaceLocale?: Locale;
  /**
   * Overall summary of Locations's reputation
   */
  summary?: string;
  weightedScore?: number;
  weightedStarScore?: number;
  /**
   * Suggestions for overall improvements on Reputation issues
   */
  improvementSuggestions?: any[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationSummaryObjectType)[keyof typeof ReputationSummaryObjectType];
};
