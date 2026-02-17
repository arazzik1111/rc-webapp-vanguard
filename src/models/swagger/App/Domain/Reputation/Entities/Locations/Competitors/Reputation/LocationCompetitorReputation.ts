import { Reviews } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Reviews';
import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';
import { ReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScores';

export const LocationCompetitorReputationObjectType = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_LocationCompetitorReputation:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\LocationCompetitorReputation',
};

export const LocationCompetitorReputationObjectTypeStrict = {
  App_Domain_Reputation_Entities_Locations_Competitors_Reputation_LocationCompetitorReputation:
    'App\\Domain\\Reputation\\Entities\\Locations\\Competitors\\Reputation\\LocationCompetitorReputation',
} as const;

export type LocationCompetitorReputation = {
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
  objectType: (typeof LocationCompetitorReputationObjectType)[keyof typeof LocationCompetitorReputationObjectType];
};
