import { DirectoryReviewsStats } from '@models/swagger/App/Domain/Reputation/Entities/ReputationWidgets/ReviewsStats/DirectoryReviewsStats';

export const ReviewsStatsObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_ReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\ReviewsStats',
};

export const ReviewsStatsObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_ReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\ReviewsStats',
} as const;

export type ReviewsStats = {
  /**
   * The total number of reviews
   */
  totalReviewsAmount?: number;
  /**
   * The average rating of the total reviews
   */
  totalReviewsAverageRating?: number;
  directoryReviewsStats?: DirectoryReviewsStats;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsStatsObjectType)[keyof typeof ReviewsStatsObjectType];
};
