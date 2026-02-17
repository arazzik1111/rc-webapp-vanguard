import { Reviews } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Reviews/Reviews';
import { ReviewsDistribution } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/ReviewsDistribution';
import { ReputationScores } from '@models/swagger/App/Domain/Reputation/Entities/Reputation/Scores/ReputationScores';

export const GooglePlaceReputationObjectType = {
  App_Domain_Reputation_Entities_ListingServices_Google_Places_Reputation_GooglePlaceReputation:
    'App\\Domain\\Reputation\\Entities\\ListingServices\\Google\\Places\\Reputation\\GooglePlaceReputation',
};

export const GooglePlaceReputationObjectTypeStrict = {
  App_Domain_Reputation_Entities_ListingServices_Google_Places_Reputation_GooglePlaceReputation:
    'App\\Domain\\Reputation\\Entities\\ListingServices\\Google\\Places\\Reputation\\GooglePlaceReputation',
} as const;

export type GooglePlaceReputation = {
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
  objectType: (typeof GooglePlaceReputationObjectType)[keyof typeof GooglePlaceReputationObjectType];
};
