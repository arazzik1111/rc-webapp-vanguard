import { AverageRatingScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/AverageRatingScore';
import { RepliesRateScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/RepliesRateScore';
import { ReputationScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScore';
import { ReviewsLengthScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReviewsLengthScore';
import { ReviewsRecencyScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReviewsRecencyScore';
import { TotalReviewsScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/TotalReviewsScore';

export const ReputationScoresObjectType = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReputationScores:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReputationScores',
};

export const ReputationScoresObjectTypeStrict = {
  App_Domain_Reputation_Entities_Reputation_Scores_ReputationScores:
    'App\\Domain\\Reputation\\Entities\\Reputation\\Scores\\ReputationScores',
} as const;

export type ReputationScores = {
  reputationScore?: ReputationScore;
  averageRatingScore?: AverageRatingScore;
  totalReviewsScore?: TotalReviewsScore;
  repliesRateScore?: RepliesRateScore;
  reviewsLengthScore?: ReviewsLengthScore;
  reviewsRecencyScore?: ReviewsRecencyScore;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReputationScoresObjectType)[keyof typeof ReputationScoresObjectType];
};
