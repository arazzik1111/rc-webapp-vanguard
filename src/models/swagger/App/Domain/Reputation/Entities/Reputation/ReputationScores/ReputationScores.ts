import { AverageRatingScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/AverageRatingScore';
import { RepliesRateScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/RepliesRateScore';
import { ReputationScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/ReputationScore';
import { ReviewsLengthScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/ReviewsLengthScore';
import { ReviewsRecencyScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/ReviewsRecencyScore';
import { TotalReviewsScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReputationScores/TotalReviewsScore';

export const ReputationScoresObjectType = {
  App_Domain_Reputation_Entities_Reputation_ReputationScores_ReputationScores:
    'App\\Domain\\Reputation\\Entities\\Reputation\\ReputationScores\\ReputationScores',
};

export type ReputationScores = {
  reputationScore?: ReputationScore;
  averageRatingScore?: AverageRatingScore;
  totalReviewsScore?: TotalReviewsScore;
  repliesRateScore?: RepliesRateScore;
  reviewsLengthScore?: ReviewsLengthScore;
  reviewsRecencyScore?: ReviewsRecencyScore;
  /**
   * The internal identifier of the entity
   */
  id?: number;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationScoresObjectType)[keyof typeof ReputationScoresObjectType];
};
