import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';

export const DirectoryReviewsStatObjectType = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsStat:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsStat',
};

export const DirectoryReviewsStatObjectTypeStrict = {
  App_Domain_Reputation_Entities_ReputationWidgets_ReviewsStats_DirectoryReviewsStat:
    'App\\Domain\\Reputation\\Entities\\ReputationWidgets\\ReviewsStats\\DirectoryReviewsStat',
} as const;

export type DirectoryReviewsStat = {
  /**
   * The directory's name
   */
  directoryName?: string;
  /**
   * The directory's alias
   */
  directoryAlias?: string;
  /**
   * Whether the directory is connected or not
   */
  isConnected?: boolean;
  /**
   * The number of reviews in the directory
   */
  reviewsAmount?: number;
  /**
   * The average rating of the reviews in the directory
   */
  reviewsAverageRating?: number;
  reviewsDistribution?: ReviewsDistribution;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof DirectoryReviewsStatObjectType)[keyof typeof DirectoryReviewsStatObjectType];
};
