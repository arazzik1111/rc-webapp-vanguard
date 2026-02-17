import { Reviews } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Reviews';
import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';
import { ReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScores';

export const ReputationObjectType = {
  App_Domain_Reputation_Entities_Reputation_Reputation: 'App\\Domain\\Reputation\\Entities\\Reputation\\Reputation',
};

export const ReputationObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Reputation: 'App\\Domain\\Reputation\\Entities\\Reputation\\Reputation',
} as const;

export type Reputation = {
  /**
   * Total number of reviews
   */
  totalReviews?: number;
  /**
   * Average star rating
   */
  averageRating?: number;
  /**
   * Count of reviews without replies
   */
  reviewsWithoutReplies?: number;
  reputationScores?: ReputationScores;
  reviewsDistribution?: ReviewsDistribution;
  reviewsWithoutContentDistribution?: ReviewsDistribution;
  reviewsWithContentDistribution?: ReviewsDistribution;
  reviews?: Reviews;
  /**
   * Whether there are any reviews or not
   */
  hasReviews?: boolean;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationObjectType)[keyof typeof ReputationObjectType];
};
