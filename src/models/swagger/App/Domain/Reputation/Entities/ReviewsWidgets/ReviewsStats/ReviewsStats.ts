import { DirectoryReviewsStats } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsWidgets/ReviewsStats/DirectoryReviewsStats';

export const ReviewsStatsObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsStats_ReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsStats\\ReviewsStats',
};

export type ReviewsStats = {
  totalReviewsAmount?: number;
  totalReviewsAverageRating?: number;
  googleStats?: DirectoryReviewsStats;
  facebookStats?: DirectoryReviewsStats;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewsStatsObjectType)[keyof typeof ReviewsStatsObjectType];
};
