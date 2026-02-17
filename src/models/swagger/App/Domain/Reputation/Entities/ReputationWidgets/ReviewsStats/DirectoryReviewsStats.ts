import { DirectoryReviewsStat } from '@models/swagger/App/Domain/Reputation/Entities/ReputationWidgets/ReviewsStats/DirectoryReviewsStat';

export const DirectoryReviewsStatsObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsStats',
};

export const DirectoryReviewsStatsObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsStats',
} as const;

export type DirectoryReviewsStats = {
  elements?: DirectoryReviewsStat[];
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsStatsObjectType)[keyof typeof DirectoryReviewsStatsObjectType];
};
