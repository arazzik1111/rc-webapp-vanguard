import { DirectoryReviewsRatingsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/ReviewsWidgets/ReviewsStats/DirectoryReviewsRatingsDistribution';

export const DirectoryReviewsStatsObjectType = {
  App_Domain_Reputation_Entities_ReviewsWidgets_ReviewsStats_DirectoryReviewsStats:
    'App\\Domain\\Reputation\\Entities\\ReviewsWidgets\\ReviewsStats\\DirectoryReviewsStats',
};

export type DirectoryReviewsStats = {
  directoryAlias?: string;
  isConnected?: boolean;
  reviewsAmount?: number;
  reviewsAverageRating?: number;
  reviewsContentDistribution?: DirectoryReviewsRatingsDistribution;
  reviewsWithoutContentDistribution?: DirectoryReviewsRatingsDistribution;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsStatsObjectType)[keyof typeof DirectoryReviewsStatsObjectType];
};
