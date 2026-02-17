import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';
import { AverageRatingScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/AverageRatingScore';
import { RepliesRateScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/RepliesRateScore';
import { ReputationScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScore';
import { ReviewsLengthScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReviewsLengthScore';
import { ReviewsRecencyScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReviewsRecencyScore';
import { TotalReviewsScore } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/TotalReviewsScore';

export const ReviewSourceReputationScoresObjectType = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReputationScores_ReviewSourceReputationScores:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReputationScores\\ReviewSourceReputationScores',
};

export const ReviewSourceReputationScoresObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Reputation_ReviewSources_ReputationScores_ReviewSourceReputationScores:
    'App\\Domain\\Reputation\\Entities\\Locations\\Reputation\\ReviewSources\\ReputationScores\\ReviewSourceReputationScores',
} as const;

export type ReviewSourceReputationScores = {
  reviewsDistribution?: ReviewsDistribution;
  reviewsWithoutContentDistribution?: ReviewsDistribution;
  reviewsWithContentDistribution?: ReviewsDistribution;
  /**
   * Number of reviews that have no replies
   */
  reviewsWithoutReplies?: number;
  reputationScore?: ReputationScore;
  averageRatingScore?: AverageRatingScore;
  totalReviewsScore?: TotalReviewsScore;
  repliesRateScore?: RepliesRateScore;
  reviewsLengthScore?: ReviewsLengthScore;
  reviewsRecencyScore?: ReviewsRecencyScore;
  /**
   * The fully qualified class name of the object
   */
  objectType: (typeof ReviewSourceReputationScoresObjectType)[keyof typeof ReviewSourceReputationScoresObjectType];
};
